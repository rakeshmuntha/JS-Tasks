// polyfill for bind
if(!Function.prototype.bind) {

    Function.prototype.bind = function(obj, ...args) {
        const orgObj = obj;
        return function(...fnargs) {
            this.call(orgObj, ...args, ...fnargs)
        }
    }
}