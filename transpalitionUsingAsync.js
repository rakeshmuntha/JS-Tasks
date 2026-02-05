function* asyncAwait() {

    console.log("hi");

    yield new Promise((res, rej) => {
        setTimeout(() => {
            res("hi there")
        }, 2000);
    })

    console.log("hi");

    yield new Promise((res, rej) => {
        setTimeout(() => {
            res("hi theasdfasdfre")
        }, 2000);
    })

    console.log("hi");

    yield new Promise((res, rej) => {
        setTimeout(() => {
            res("hi rakesb")
        }, 2000);
    })
}
function fun(it) {
    const b = it.next();

    if (!b.done) {
        Promise.resolve(b.value)
            .then((data) => {
                    console.log(data);
                    fun(it);
                })
            .catch((err) => {
                    console.log(err);
                    fun(it);
                })
    }
}

const a = asyncAwait();
fun(a);