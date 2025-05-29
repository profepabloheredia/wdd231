const openButton1=document.querySelector("#openButton1");
const openButton2=document.querySelector("#openButton2");
const openButton3=document.querySelector("#openButton3");
const closeButton=document.querySelector("#closeButton");
const dialogBox=document.querySelector("#dialogBox");
const dialogBoxText=document.querySelector("#dialogBox div");

openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBox.innerHTML="Example 1"
});
openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBox.innerHTML="Example 2"
});
openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBox.innerHTML="Example 3"
});
closeButton.addEventListener("click", () => {
    dialogBox.close();
});