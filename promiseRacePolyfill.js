// polyfill for promise.race
if(!Promise.race) {
    Promise.race = function(arr) {

        return new Promise((res, rej) => {
            for(let i = 0 ; i < arr.length ; i++) {
    
                Promise.resolve(arr[i]).then((data) => {
                    res(data);
                })
                .catch((err) => {
                    rej(err);
                });
            }
        })
    }
}