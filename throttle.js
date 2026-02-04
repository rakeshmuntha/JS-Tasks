// Throttle utility with immediate and trailing options
function throttleUtility(fn, delay, immediate = false) {
    let flag = true;

    return function(...args) {
        const callnow = immediate && !flag;

        timer = setTimeout(() => {
            timer = null;
            
            if(!immediate) fn(...args);
        }, delay);

        if(callnow) fn(...args);
    }
}