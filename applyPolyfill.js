// polyfill for apply
if(!Function.prototype.apply) {

    Function.prototype.apply = function(obj, args) {
        obj = obj ?? globalThis;
        const fn = Symbol();
        obj[fn] = this;
    
        const res = obj[fn](...args);
        delete obj[fn];
    
        return res;
    }
}