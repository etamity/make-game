/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Image field.  Used for titles, labels, etc.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.FieldTexture');

goog.require('Blockly.Field');
goog.require('goog.dom');
goog.require('goog.math.Size');
goog.require('goog.userAgent');
goog.require('goog.events');
goog.require('goog.style');

/**
 * Class for an image.
 * @param {string} src The URL of the image.
 * @param {number} width Width of the image.
 * @param {number} height Height of the image.
 * @param {string=} opt_alt Optional alt text for when block is collapsed.
 * @extends {Blockly.Field}
 * @constructor
 */

Blockly.FieldTexture = function(block) {
    this.container = window.Realm.Game.Assets.container;
    Blockly.FieldTexture.superClass_.constructor.call(this, this.container);
    // Ensure height and width are numbers.  Strings are bad at math.
    this.sourceBlock_ = block;
    var height = 32;
    var width = 32;
    this.height_ = Number(height);
    this.width_ = Number(width);
    this.size_ = new goog.math.Size(this.width_,
        this.height_ + 2 * Blockly.BlockSvg.INLINE_PADDING_Y);
    this.value_ = '';

};
goog.inherits(Blockly.FieldTexture, Blockly.Field);

/**
 * Rectangular mask used by Firefox.
 * @type {Element}
 * @private
 */
Blockly.FieldTexture.prototype.rectElement_ = null;

/**
 * Editable fields are saved by the XML renderer, non-editable fields are not.
 */
Blockly.FieldTexture.prototype.EDITABLE = false;

/**
 * Install this image on a block.
 */
Blockly.FieldTexture.prototype.init = function() {
    if (this.fieldGroup_) {
        // Image has already been initialized once.
        return;
    }

    // Build the DOM.
    /** @type {SVGElement} */
    this.fieldGroup_ = Blockly.utils.createSvgElement('g', {}, null);
    if (!this.visible_) {
        this.fieldGroup_.style.display = 'none';
    }

    this.borderRect_ = Blockly.utils.createSvgElement('rect', {
        'rx': 4,
        'ry': 4,
        'x': -Blockly.BlockSvg.SEP_SPACE_X / 2,
        'y': 0,
        'height': 16
    }, this.fieldGroup_, this.sourceBlock_.workspace);

    /** @type {SVGElement} */
    this.imageElement_ = Blockly.utils.createSvgElement('image', {
        'height': this.height_ + 'px',
        'width': this.width_ + 'px'
    }, this.fieldGroup_);

    if (goog.userAgent.GECKO) {
        /**
         * Due to a Firefox bug which eats mouse events on image elements,
         * a transparent rectangle needs to be placed on top of the image.
         * @type {SVGElement}
         */
        this.rectElement_ = Blockly.utils.createSvgElement('rect', {
            'height': this.height_ + 'px',
            'width': this.width_ + 'px',
            'fill-opacity': 0
        }, this.fieldGroup_);
    }

    // this.fieldGroup_.appendChild(this.imageElement_);
    this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_);

    // Configure the field to be transparent with respect to tooltips.
    var topElement = this.rectElement_ || this.imageElement_;
    topElement.tooltip = this.sourceBlock_;
    Blockly.Tooltip.bindMouseEvents(topElement);
    this.imageElement_.onclick = function() {
        this.showEditor_();
    }.bind(this);

   
    if (this.container.childNodes.length > 0) {
        var value = this.getValue() ? JSON.parse(this.getValue()) : {index:index, key: key};
        var index = value.index;
        var key = value.key;
        var images = this.container.querySelectorAll('img[index="'+ index +'"][alt="'+ key +'"]');
        var image = images.length > 0 ? images[0] : this.container.childNodes[0];
        var src = image.getAttribute('src');
        index = image.getAttribute('index');
        key = image.getAttribute('alt');
        value = {index:index, key: key};
        this.setValue(JSON.stringify(value));
        this.setSrc(src);
        this.onItemChanged(value);
    }
};

/**
 * Dispose of all DOM objects belonging to this text.
 */
Blockly.FieldTexture.prototype.dispose = function() {
    goog.dom.removeNode(this.fieldGroup_);
    this.fieldGroup_ = null;
    this.imageElement_ = null;
    this.rectElement_ = null;
};

/**
 * Change the tooltip text for this field.
 * @param {string|!Element} newTip Text for tooltip or a parent element to
 *     link to for its tooltip.
 */
Blockly.FieldTexture.prototype.setTooltip = function(newTip) {
    var topElement = this.rectElement_ || this.imageElement_;
    topElement.tooltip = newTip;
};
/**
 * Get the value of this image.
 * @return {string} Current text.
 * @override
 */
Blockly.FieldTexture.prototype.getValue = function() {
    return this.value_;
};

/**
 * Set the value of this image.
 * @param {?string} src New source.
 * @override
 */
Blockly.FieldTexture.prototype.setValue = function(value) {
    if (value === null) {
        // No change if null.
        return;
    }
    this.value_ = value;
};

/**
 * Get the source URL of this image.
 * @return {string} Current text.
 * @override
 */
Blockly.FieldTexture.prototype.getSrc = function() {
    return this.src_;
};

/**
 * Set the source URL of this image.
 * @param {?string} src New source.
 * @override
 */
Blockly.FieldTexture.prototype.setSrc = function(src) {
    if (src === null) {
        // No change if null.
        return;
    }
    this.src_ = src;
    if (!this.imageElement_) {
        return;
    }

    if (this.imageElement_) {
        this.imageElement_.setAttributeNS('http://www.w3.org/1999/xlink',
            'xlink:href', goog.isString(src) ? src : '');
    }
};

/**
 * Images are fixed width, no need to render.
 * @private
 */
Blockly.FieldTexture.prototype.render_ = function() {
    // NOP
};

/**
 * Create a dropdown menu under the text.
 * @private
 */
Blockly.FieldTexture.prototype.showEditor_ = function() {
    Blockly.WidgetDiv.show(this, this.sourceBlock_.RTL, null);
    var thisField = this;
    // Record windowSize and scrollOffset before adding menu.
    var windowSize = goog.dom.getViewportSize();
    var scrollOffset = goog.style.getViewportPageOffset(document);
    var xy = this.getAbsoluteXY_();
    var borderBBox = this.getScaledBBox_();
    var div = Blockly.WidgetDiv.DIV;
    div.appendChild(this.container);
    var menuDom = this.container;

    var nodes = this.container.childNodes;

    for(var i=0; i<nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == 'img') {
            nodes[i].onclick = callback.bind(this);
        }
    }
    function callback(e) {
        var imgItem = e.target;
        if (imgItem) {
            this.onItemSelected(imgItem);
        }
        var div = Blockly.WidgetDiv.DIV;
        div.removeChild(this.container);
        Blockly.WidgetDiv.hideIfOwner(this);
    }

    Blockly.WidgetDiv.position(xy.x, xy.y + 32, windowSize, scrollOffset,
        this.sourceBlock_.RTL);
    menuDom.focus();
};

/**
 * Handle the selection of an item in the dropdown menu.
 * @param {!goog.ui.Menu} menu The Menu component clicked.
 * @param {!goog.ui.MenuItem} menuItem The MenuItem selected within menu.
 */
Blockly.FieldTexture.prototype.onItemSelected = function(imgItem) {
    var index = imgItem.getAttribute('index');
    var text = imgItem.getAttribute('alt');
    var src = imgItem.getAttribute('src');
    // if (this.sourceBlock_) {
    //     // Call any validation function, and allow it to override.
    //     value = this.callValidator(value);
    // }

    var value = {index:index, key: text};

    if (src !== null) {
        this.setSrc(src);
    }

    if (value !== null) {
        this.setValue(JSON.stringify(value));
    }
    if (this.onItemChanged)
    {
        this.onItemChanged(value);
    }
}