const img = document.querySelector(".slider-img");

const imgArr = ["./img/Jennifer.jpg", "./img/Jennifer1.jpg", "./img/Jennifer2.jpg"];

let currIndex = 0;

function sliders(parr) {

    currIndex += parr;

    if (currIndex >= imgArr.length) {
        currIndex = 0;
    } else if (currIndex < 0) {
        currIndex = imgArr.length - 1;
    }
    img.src = imgArr[currIndex];

}

const tabs = document.querySelectorAll(".tab-head-elem");
const contents = document.querySelectorAll(".tab-content-elem");

tabs.forEach((tab, index) => {
    tab.onclick = () => {
        clickFunc(index)
    };
});

function clickFunc(index) {
    for (let tab of tabs) {
        tab.classList.remove("active");
    }
    tabs[index].classList.add("active");

    for (let content of contents) {
        content.classList.remove("active");
    }
    contents[index].classList.add("active");
}