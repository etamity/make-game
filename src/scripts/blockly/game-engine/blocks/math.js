(function(Realm) {
    const CATEGORY = 'Math';
    const COLOUR = 0;
    var blocks = [{
        "type": "get_min",
        "message0": "get min number %1",
        "args0": [{
            "type": "input_value",
            "Check": "List"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.min(@0)"
        }
    }, {
        "type": "get_max",
        "message0": "get max number %1",
        "args0": [{
            "type": "input_value",
            "Check": "List"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.max(@0)"
        }
    }, {
        "type": "degtorad",
        "message0": "degree %1 to radians",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.degToRad(@0)"
        }
    }, {
        "type": "radtodeg",
        "message0": "radians %1 to degree",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.radToDeg(@0)"
        }
    }, {
        "type": "wrapangle",
        "message0": "wrap angle %1 radians %2",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.wrapAngle(@0, @1)"
        }
    }, {
        "type": "wrapvalue",
        "message0": "wrap value %1 amount %2 max %3",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.wrapValue(@0, @1, @2)"
        }
    }, {
        "type": "distance",
        "message0": "get distance x1 %1 y1 %2 x2 %3 y2 %4",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.distance(@0, @1, @2, @3)"
        }
    }, {
        "type": "average",
        "message0": "average value %1 %2 %3",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.average(@0, @1, @2)"
        }
    }, {
        "type": "angle_bwteen",
        "message0": "angle bwteen x1 %1 y1 %2 x2 %3 y2 %4",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.angleBetween(@0, @1, @2, @3)"
        }
    }, {
        "type": "angle_bwteen_y",
        "message0": "angle bwteen Y x1 %1 y1 %2 x2 %3 y2 %4",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.angleBetweenY(@0, @1, @2, @3)"
        }
    }, {
        "type": "angle_between_points",
        "message0": "angle bwteen point1 %1 point2 %2",
        "args0": [{
            "type": "input_value",
            "check": "POSITION"
        }, {
            "type": "input_value",
            "check": "POSITION"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.angleBetweenPoints(@0, @1)"
        }
    }, {
        "type": "angle_between_points_y",
        "message0": "angle bwteen Y point1 %1 point2 %2",
        "args0": [{
            "type": "input_value",
            "check": "POSITION"
        }, {
            "type": "input_value",
            "check": "POSITION"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.angleBetweenPointsY(@0, @1)"
        }
    }, {
        "type": "distance_round",
        "message0": "distance round x1 %1 y1 %2 x2 %3 y2 %4",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.distanceRounded(@0, @1, @2, @3)"
        }
    }, {
        "type": "distance_pow",
        "message0": "distance pow x1 %1 y1 %2 x2 %3 y2 %4",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.distancePow(@0, @1, @2, @3)"
        }
    }, {
        "type": "is_odd",
        "message0": "check %1 is odd ",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Boolean",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.isOdd(@0)"
        }
    }, {
        "type": "is_even",
        "message0": "check %1 is even ",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Boolean",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.isEven(@0)"
        }
    }, {
        "type": "cover_floor",
        "message0": "cover %1 to floor",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.floor(@0)"
        }
    }, {
        "type": "cover_factorial",
        "message0": "factorial %1",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.factorial(@0)"
        }
    }, {
        "type": "value_limit",
        "message0": "limit %1 between %2 to %3",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.limitValue(@0, @1, @2)"
        }
    }, {
        "type": "angle_limit",
        "message0": "angle limit %1 between %2 to %3",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.angleLimit(@0, @1, @2)"
        }
    }, {
        "type": "difference",
        "message0": "get difference %1 and %2",
        "args0": [{
            "type": "input_value",
            "check": "Number"
        }, {
            "type": "input_value",
            "check": "Number"
        }],
        "output": "Number",
        "tooltip": "",
        "helpUrl": "",
        "languages": {
            "javaScript": "game.math.difference(@1, @2)"
        }
    }];

    window.Realm.Game.Blockly.addBlocks(CATEGORY, blocks, COLOUR);

})(window.Realm = window.Realm || {});
