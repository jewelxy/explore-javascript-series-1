        //Login Event handler
        const loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function(){
            const loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";

            const transactionArea = document.getElementById("transaction-area");
            transactionArea.style.display = "block";
        })

    //Deposit event handler
    const depositBtn = document.getElementById("addDeposit");
    depositBtn.addEventListener("click",function(){
        const depositAddAmonunt = document.getElementById("depositAmount").value;
        const depositNumber = parseFloat(depositAddAmonunt);

        const currentDepositAmount = document.getElementById("currentDeposit").innerText;
        const currentDepositNumber = parseFloat(currentDepositAmount);
        //Add Deposit
        const totalDeposit = depositNumber + currentDepositNumber;
        document.getElementById("currentDeposit").innerText = totalDeposit;
        document.getElementById("depositAmount").value = ""; //Make input box blank
        //Add Current Balance
        const currentAmount = document.getElementById("currentBallance").innerText;
        const currentAmountNumber = parseFloat(currentAmount);
        const totalBalance = currentAmountNumber + depositNumber;
        document.getElementById("currentBallance").innerText = totalBalance;

    })

    //add Withdraw event handler
    const withdrawBtn = document.getElementById("addWithdraw");
    withdrawBtn.addEventListener("click",function(){
        const withdrawAddAmount = document.getElementById("withdrawAmount").value;
        const withdrawNumber = parseFloat(withdrawAddAmount);

        //Add withdraw
        const currentWithdrawAmount = document.getElementById("currentWithdraw").innerText;
        const currentWithdrawNumber = parseFloat(currentWithdrawAmount);
        const totalWithdraw = withdrawNumber + currentWithdrawNumber;
        document.getElementById("currentWithdraw").innerText = totalWithdraw;
        document.getElementById("withdrawAmount").value = "";

        //total balance 
        const currentAmount = document.getElementById("currentBallance").innerText;
        const currentAmountNumber = parseFloat(currentAmount);
        const totalBalance = currentAmountNumber - withdrawNumber;
        document.getElementById("currentBallance").innerText = totalBalance;
    })