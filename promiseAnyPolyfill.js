// polyfill for promise.any
if(!Promise.any) {
    Promise.any = function(arr) {
        if(arr.length === 0) return new Promise.reject(new AggregateError([], ""));
        let cnt = 0, error = [];

        return new Promise((res, rej) => {
            for(let i = 0 ; i < arr.length ; i++) {
    
                Promise.resolve(arr[i]).then((data) => {
                    res(data);
                })
                .catch((err) => {
                    cnt++;
                    error.push(err);
                    if(cnt === arr.length) {
                        rej(new AggregateError(error, ""));
                    }                
                });
            }
        })
    }
}
