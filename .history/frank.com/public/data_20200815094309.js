const random = Math.random()
console.log(random);
window.xxx = (data) => {
    console.log(data);
}
const script = document.createElement("script");
script.src = "http://qq.com:8888/friends.js";
document.body.appendChild(script);