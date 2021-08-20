const initialPrice = document.querySelector("#initial-price")
const stocksQuantity = document.querySelector("#stocks-quantity")
const currentPrice = document.querySelector("#current-price")
const checkBtn = document.querySelector("#check-btn")

function clickHandler(){
    
}

function calculateProfitAndLoss(initial,quantity,current){
    if(initial > current){
        // code for loss
        var loss = (initial-current) * quantity;
        var lossPercentage = (loss/initial) * 100;
        console.log('hey the loss is ' + loss + ' and the percent is ' + lossPercentage + '%')
    }else if(current > initial){
        // code for profit
        var profit = (current-initial) * quantity;
        var profitPercentage = (profit/current) * 100;
        console.log('Hurray!! Your Profit is ' + profit + ' and the percent is ' + profitPercentage +'%')
        
    }else{
        // the rest of code
        console.log('Unfortunetly No Profit And fortuneatly No Loss!')
    }
}
calculateProfitAndLoss(10,5,10)


checkBtn.addEventListener("click", clickHandler)