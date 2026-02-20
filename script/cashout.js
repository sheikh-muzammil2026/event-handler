// console.log("added cashout file")

document.getElementById("btn-withraw").addEventListener('click', function(){
    //1- get the agent number 
    //2- get the ammount, validate, convert to number
    //3- get the current balance
    //4- calculate new balance.
    //5- get the pin , varify

    let agentNumber = getValueFromInput("agent-number");
  
    let cashoutAmount =  Number(getValueFromInput("cashout-amount"));
     
    let balance =  getBalance();
      
    let newBalance = balance -  cashoutAmount;
      

    
    if(agentNumber.length != 11 || isNaN(agentNumber)){
        alert("Agent number should be 11 digit.");
        return;
    }

    if(newBalance < 0){
        alert("invalid ammount.");
     return;
    }

    let pin = document.getElementById("cashout-pin").value;
    if(pin === "1234"){
        alert("Cash out successful.");
         setBalance(newBalance);
    }else{
        alert("Invalid pin.");
        return;
    }

    let history = document.getElementById("transactions");
    let newHistory = document.createElement("div");

     newHistory.innerHTML = `
        Cash out successful to ${agentNumber} at ${new Date()}
        `;
    history.append(newHistory);
    // console.log("agent number :"+ agentNumber +" cash out ammount :"+ cashoutAmount +" balance :"+ balance);
})




