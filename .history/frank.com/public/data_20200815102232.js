// const random = "frankJSONPCallbackName" + Math.random()
// console.log(random);
// window[random] = (data) => {
//     console.log(data);
// }
// const script = document.createElement("script");
// script.src = "http://qq.com:8888/friends.js?functionName=" + random;
// script.onload = () => {
//     script.remove();
// }
// document.body.appendChild(script);
function jsonp(url) {
    return new Promise((reslove, reject) => {
        const random = "frankJSONPCallbackName" + Math.random();
        window[random] = (data) => {
            reslove(data);
        }
        const script = document.createElement("script");
        script.src = `${url}?callback=${random}`;
        script.onload = () => {
            script.remove();
        }
        script.onerror = () => {
            reject();
        }
        document.body.appendChild(script);
    })
}
jsonp("http://qq.com:8888/friends.js").then((data) => {
    console.log(data);
})