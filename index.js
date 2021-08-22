const initialPrice = document.querySelector("#initial-price")
const stocksQuantity = document.querySelector("#stocks-quantity")
const currentPrice = document.querySelector("#current-price")
const checkBtn = document.querySelector("#check-btn")
const outputBox = document.querySelector("#output-box")


function clickHandler() {
    const ip = Number(initialPrice.value);
    const qty = Number(stocksQuantity.value);
    const crr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, crr)
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        // code for loss
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        outputBox.innerText = 'Ohh!! the loss is ' + loss + ' and the percent is ' + lossPercentage + '%'
        outputBox.style.color = "Red"
        outputBox.style.fontSize ="25px";
      
    } else if (current > initial) {
        // code for profit
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / current) * 100;
        outputBox.innerText = 'Hurray!! Your Profit is ' + profit + ' and the percent is ' + profitPercentage + '%'
        outputBox.style.color = "Green"
        outputBox.style.fontSize ="25px";

    } else {
        // the rest of code
        outputBox.innerText = 'Fortunatly No Loss!! Unfortunatly No Profit !!'
        outputBox.style.color = "purple"
        outputBox.style.fontSize ="25px";
    }

}




checkBtn.addEventListener("click", clickHandler)