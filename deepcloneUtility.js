function deepClone(obj) {
    return findDeepClone(obj, new WeakMap())
}
function findDeepClone(obj, h) {

    if (obj === null || typeof obj !== "object") return obj;
    if(h.has(obj)) return h.get(obj);

    const ans = Array.isArray(obj) ? [] : {};
    h.set(obj, ans);

    for(let i in obj) {
        if(typeof obj[i] === "object") {
            ans[i] = findDeepClone(obj[i], h);
        }
        else {
            ans[i] = obj[i];
        }
    }
    return ans;
}

