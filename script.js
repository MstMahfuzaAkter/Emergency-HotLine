function getElement(id) {
    return document.getElementById(id);
}

function getElementClass(cls) {
    return document.getElementsByClassName(cls);
}
let hearts = getElementClass("heart");

// প্রতিটা heart এ event listener বসানো
for (let heart of hearts) {
    heart.addEventListener("click", function (e) {
        e.preventDefault();

        let count_heart = Number(getElement("count-heart").innerText) + 1;
        getElement("count-heart").innerText = count_heart;
    });
}