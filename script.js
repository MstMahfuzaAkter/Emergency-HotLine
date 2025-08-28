function getElement(id) {
    return document.getElementById(id);
}

function getElementClass(cls) {
    return document.getElementsByClassName(cls);
}
let hearts = getElementClass("heart");
for (let heart of hearts) {
    heart.addEventListener("click", function (e) {
        e.preventDefault();

        let count_heart = Number(getElement("count-heart").innerText) + 1;
        getElement("count-heart").innerText = count_heart;
    });
}

getElement("product-box").addEventListener("click",
    function (e) {
        if (e.target.className.includes("call-btn")) {
            const callButton = e.target;
            const cardTitle = callButton.parentNode.parentNode.parentNode.children[1].innerText
            const callNumber = callButton.parentNode.parentNode.parentNode.children[3].innerText
            const data = {
                date: new Date().toLocaleTimeString()
            }
            const cartContainer = getElement("cart-container");
            const newcart = document.createElement("div");
            newcart.innerHTML = `
            <div class="flex items-center justify-between shadow-sm bg-[var(--Surface,rgba(250,250,250,1))]  rounded-sm  mt-5">
                            <div>
                                <p class="text-[var(--Dark, rgba(17, 17, 17, 1))] font-semibold p-3 pb-1">${cardTitle}
                                </p>
                                <p class="text-gray-400 font-bold p-3 pt-0">${callNumber}</p>
                            </div>
                            <div class="pr-3 text-[var(--Dark, rgba(17, 17, 17, 1))] font-semibold ">
                                <p>${data.date}</p>
                            </div>
                        </div>
                        
        `;
            cartContainer.append(newcart);

        }
    }
);

getElement("clear-btn").
    addEventListener("click", function (e) {
        e.preventDefault();
        getElement("cart-container").innerText = " ";
    })