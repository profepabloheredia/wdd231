const levelModal = document.querySelector("#levelDialog");
const closeModal = document.querySelector("#closeButton");
const title = document.querySelector("#levelTitle");
const details = document.querySelector("#levelDetails");

const noProfit = document.querySelector("#btnNone")
const bronze = document.querySelector("#btnBronze")
const silver = document.querySelector("#btnSilver")
const gold = document.querySelector("#btnGold")

closeModal.addEventListener('click', () => levelModal.close());

// *******  No-profit info modal ******

noProfit.addEventListener("click", () => {
    
    title.innerHTML="Non Profit Membership";
    details.innerHTML=`<p>Benefits include:</p> <ul>
    <li>You'll get a 1 MONTH FREE ADVERTISMENT</li>
    <li>You'll get a FREE TRAVEL in <a href="https://profepabloheredia.github.io/wdd130/wwr/">RAFTING 4 ALL</a></li>
    </ul>
    <p>COST: Free</p>`;
    levelModal.setAttribute('class', 'none');
    levelModal.showModal();
});


bronze.addEventListener('click', () => {
    levelModal.showModal();
    title.innerHTML = "Bronze Membership";
    details.innerHTML=`<p>Benefits include:</p> <ul>
    <li>Discount tickets to all Bowl Games</li>
    <li>You'll get a 3 MONTH FREE ADVERTISMENT</li>
    <li>You'll get a FREE TRAVEL in <a href="https://profepabloheredia.github.io/wdd130/wwr/">RAFTING 4 ALL</a></li>
    </ul>
    <p>COST: $15 annual</p>`;
    levelModal.setAttribute('class', 'bronze');
    levelModal.showModal();
});
silver.addEventListener('click', () => {
    levelModal.showModal();
    title.innerHTML = "Silver Membership";
    details.innerHTML=`<p>Benefits include:</p> <ul>
    <li>10% OFF Discount tickets in Hotels (inside of US) </li>
    <li>You'll get a 6 MONTH FREE ADVERTISMENT</li>
    <li>You'll get a FREE TRAVEL in <a href="https://profepabloheredia.github.io/wdd130/wwr/">RAFTING 4 ALL</a></li>
    </ul>
    <p>COST: $50 annual</p>`;
    levelModal.setAttribute('class', 'silver');
    levelModal.showModal();
});
gold.addEventListener('click', () => {

    
    title.innerHTML = "Gold Membership";
    details.innerHTML=`<p>Benefits include:</p> <ul>
    <li>15% OFF Discount tickets in Hotels (inside of US) </li>
    <li>You'll get a 1 YEAR FREE ADVERTISMENT ON HOME PAGE</li>
    <li>You'll get a FREE FLY TO "RIO DE JANEIRO" </li>
    </ul>
    <p>COST: $99 annual</p>`;
    levelModal.setAttribute('class', 'gold');
    levelModal.showModal();
});

const currentTime = document.querySelector("#currentTime");
const date = new Date().toLocaleString();
currentTime.value = date
