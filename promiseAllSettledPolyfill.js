// polyfill for promise.allSettled
if(!Promise.allSettled) {
    Promise.allSettled = function(arr) {
        if(arr.length === 0) return Promise.resolve([]);
        let ans = [], cnt = 0;

        return new Promise((res, rej) => {
            for(let i = 0 ; i < arr.length ; i++) {
    
                Promise.resolve(arr[i]).then((data) => {
                    ans[i] = data;
                })
                .catch((err) => {
                    ans[i] = err;
                })
                .finally(() => {
                    cnt++;
                    if(cnt === arr.length) res(arr);
                })
            }
        })
    }
}