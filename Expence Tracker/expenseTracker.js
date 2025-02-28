let balance= 0;
let expenses =[];
function updateBalance(){
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("expenseName").value="";
    document.getElementById("expenseAmount").value="" ;
    
}
function addExpense(){
    let nameInput = document.getElementById("expenseName");
    let amountInput=document.getElementById("expenseAmount");
    let name = nameInput.value.trim();
    let amount =parseFloat(amountInput.value);
    
    if(name=="" || isNaN(amount) || amount <= 0){
        alert("please enter valid details!");
        return;
    }

    let expense = {name,amount};
    expenses.push(expense);
    balance -= amount;

    updateBalance();
    displayExpenses();
    
}

function displayExpenses(){
    let expense = document.getElementById("expenseList");
    expense.innerHTML = "";

    expenses.forEach((expense,index) =>{
        let li = document.createElement("li");
        li.innerHTML = `${expense.name} - ${expense.amount}
        <button class="delete-btn" onclick="deleteExpense(${index})">remove</button>`;
        expenseList.appendChild(li);
    } );
}

function deleteExpense(index){
    balance += expenses[index].amount;
    expenses.splice(index,1);
    updateBalance();
    displayExpenses();
}
function clearExpense(){
    expenses = [];
    balance = 0;
    updateBalance();
    displayExpenses();
    
    
}
function change(){
    

}