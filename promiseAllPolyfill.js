// polyfill for promise.all
if(!Promise.all) {
    Promise.all = function(arr) {
        if(arr.length === 0) return Promise.resolve([]);
        let ans = [], cnt = 0;

        return new Promise((res, rej) => {
            for(let i = 0 ; i < arr.length ; i++) {
    
                Promise.resolve(arr[i]).then((data) => {
                    cnt++;
                    ans[i] = data;
                    if(cnt === arr.length) res(ans);
                })
                .catch(err => {rej(err)});
            }
        })
    }
}