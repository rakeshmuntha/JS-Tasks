// polyfill for call
if(!Function.prototype.call) {

    Function.prototype.callCopy = function(obj, ...args) {
        obj = obj ?? globalThis;
        const fn = Symbol();
        obj[fn] = this;
    
        const res = obj[fn](...args);
        delete obj[fn];
    
        return res;
    }
}