

// Debounce utility with immediate and trailing options

function debounceUtility(fn, delay, immediate = false) {
    let timer;

    return function(...args) {
        const callnow = immediate && !timer;

        timer = setTimeout(() => {
            timer = null;
            
            if(!immediate) fn(...args);
        }, delay);

        if(callnow) fn(...args);
    }
}