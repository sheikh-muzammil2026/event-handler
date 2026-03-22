// console.log("added cashout file")

document.getElementById("btn-add-money").addEventListener('click', function(){
    //1- get the agent number 
    //2- get the ammount, validate, convert to number
    //3- get the current balance
    //4- calculate new balance.
    //5- get the pin , varify

    let accNumber = getValueFromInput("bank-acc-number");
  
    let addAmount =  Number(getValueFromInput("add-money-amount"));
     
    let balance =  getBalance();
      
    let newBalance = balance + addAmount;
      

    
    if(accNumber.length != 11 || isNaN(accNumber)){
        alert("Account number should be 11 digit.");
        return;
    }

    if(newBalance < 0){
        alert("invalid ammount.");
     return;
    }

    let pin = document.getElementById("add-money-pin").value;
    if(pin === "1234"){
        alert("Add money successful.");
         setBalance(newBalance);
    }else{
        alert("Invalid pin.");
        return;
    }

    let historyContainer = document.getElementById("transactions");
    let newHistory = document.createElement("p");
		newHistory.classList.add("history-style");

     newHistory.innerText = `
        Add money successful from ${accNumber} at ${new Date()}
        `;
    historyContainer.appendChild(newHistory);
    // console.log("agent number :"+ agentNumber +" cash out ammount :"+ cashoutAmount +" balance :"+ balance);
})




