function memorize(fn, size = 5) {
    let h = new Map();

    return function(...args) {

        const key = JSON.stringify(args);

        if(h.has(key)) return h.get(key);
        if(h.size() >= size) {
            h.delete(h.keys().next().value); // h.keys return iterator. we traverse each using .next method in value the key will be ther
        }
    
        const res = fn(...args);
        h.set(key, res);

        return res;
    }
}