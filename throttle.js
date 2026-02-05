// Throttle utility with trailing
function throttleTrail(fn, delay) {
    let flag = true;

    return function () {
        if (flag) {
            flag = false;

            setTimeout(() => {
                fn();
                flag = true;
            }, delay);
        }
    }
}

// Throttle utility with leading
function throttleLead(fn, delay) {
    let flag = true;

    return function () {
        if (flag) {
            fn();
            flag = false;

            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}
