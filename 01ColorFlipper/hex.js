const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById("btn");


/*.querySelector(".color") is the method in javascript is a DOM method that allows us to select the first element that matches a specified CSS selector
for example in below .color is class in the hex.html page inside the h2 tag
            <h2>
                background color:
                <span class="color">#f1f5f8</span>
            </h2>
            so color variable holds the color class and modify in the btn.addEventListner() function
*/
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    let hexColor="#"
    for (let index = 0; index < 6; index++) {
        hexColor+=hex[getRandomNumber()];        
    }
    color.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}