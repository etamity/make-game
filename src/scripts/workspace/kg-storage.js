(function(Realm) {

    const BLOCKLY_XML = 'KG-BLOCKLYXML';
    const PROJECT_CONFIG = 'KG-PROJECT';


    var Storage = function() {
        if (typeof(Storage) !== "undefined") {
            this.localStorage = window.localStorage;
        } else {
            console.log('Sorry! No Web Storage support..');
        }

        this.variablesList = [];
    }
    var p = Storage.prototype = Object.create({});
    p.constructor = Storage;

    p.setVariable = function(name, value){
        this.variablesList[name] = value;
    }
    p.getVariable = function(name){
        return this.variablesList[name];
    }
    p.set = function(name, value) {
        this.localStorage.setItem(name, value);
    }
    p.get = function(name) {
        return this.localStorage.getItem(name);
    }

    p.getBlocklyXML = function () {
        return this.get(BLOCKLY_XML);
    }
    p.setBlocklyXML = function (value) {
        this.set(BLOCKLY_XML, value);
    }
    p.removeBlocklyXML = function () {
        this.localStorage.removeItem(BLOCKLY_XML);
    }
    p.getProjectConfig = function () {
        return this.get(PROJECT_CONFIG);
    }
    p.setProjectConfig = function (value) {
        this.set(PROJECT_CONFIG, value);
    }
    window.Realm.Game = window.Realm.Game || {};
    window.Realm.Game.Storage = new Storage();

})(window.Realm = window.Realm || {});
