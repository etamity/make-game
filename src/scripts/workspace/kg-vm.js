(function(Realm) {

    var FundationTypes = "console,Phaser,true,false,Array,ArrayBuffer,Boolean,Collator,DataView,Date,DateTimeFormat,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,EvalError,Float32Array,Float64Array,Function,Infinity,Intl,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,NumberFormat,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError";

    var VM = function(context) {
        this.context = context || {};
        this.modules = this.context.modules || [];
        this.preloadCode = [];
    }

    VM.prototype.addCode = function(code){
        this.preloadCode.push(code);
    }

    VM.prototype.runSandbox = function (code){
           //create local versions of window and document with limited functionality
        var locals = {};
        var that = Object.create(null); // create our own context for the user code
        var modules = this.modules;
        function createSandbox(code, that, locals) {
            var params = []; // the names of local variables
            var args = []; // the local variables

            var keys = Object.getOwnPropertyNames(window);
            for (var i = 0; i < keys.length; ++i) {
                locals[keys[i]] = void 0;
            }

            delete locals['eval'];
            delete locals['arguments'];
            var ignoreArgs = FundationTypes.split(',');

            for (var param in locals) {
                if (locals.hasOwnProperty(param)) {
                    var contained = (ignoreArgs.indexOf(param) > -1);
                    if (!contained) {
                        args.push(locals[param]);
                        params.push(param);
                    }
                }
            }

            for (param in modules) {
                args.push(modules[param]);
                params.push(param);
            }

            var context = Array.prototype.concat.call(that, params, code); // create the parameter list for the sandbox
            var sandbox = new(Function.prototype.bind.apply(Function, context)); // create the sandbox function
            context = Array.prototype.concat.call(that, args); // create the argument list for the sandbox

            return Function.prototype.bind.apply(sandbox, context); // bind the local variables to the sandbox
        }

        return createSandbox(code, that, locals)(); // create a sandbox
    }
    VM.prototype.getCode = function(){
        var code = '"use strict";\n'
        for (key in this.preloadCode)
        {
            code += this.preloadCode[key]; 
        }
        return code;
    }

    VM.prototype.run = function(code) {
        if (code)
        {  
            this.addCode(code);
        }
        this.runSandbox(this.getCode());
    }

    VM.prototype.addModule = function(name, obj) {
        this.modules[name] = obj;
    }
    VM.prototype.deleteModule = function(name) {
        delete this.modules[name];
    }

    window.Realm.VM = VM;

})(window.Realm = window.Realm || {});