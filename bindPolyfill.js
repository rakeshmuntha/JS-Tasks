// polyfill for bind
if (!Function.prototype.bind) {

    Function.prototype.bind = function (obj, ...args) {

        let fun = this ?? window;
        return function bound(...fnargs) {
            if (this instanceof bound) {
                fun.call(this, ...args, ...fnargs);
            }
            else fun.call(obj, ...args, ...fnargs);
        }
    }
}