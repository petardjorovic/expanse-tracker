"use strict";
// ACCESS DOM ELEMENTS FROM TYPESCRIPT
const expType = document.getElementById("expense-type");
const expDesc = document.getElementById("desc");
const expAmt = document.getElementById("amount");
const addExpBtn = document.querySelector(".add-expense-btn");
const debitDiv = document.querySelector(".expense-debit-item-container");
const creditDiv = document.querySelector(".expense-credit-item-container");
const totalAmountDiv = document.querySelector(".total-expense-amount");
let expenseItems = [];
let totalAmount = 0;
function displayExpenseItems() {
    debitDiv.innerHTML = "";
    creditDiv.innerHTML = "";
    for (let i = 0; i < expenseItems.length; i++) {
        let expItem = expenseItems[i];
        let containerDiv = expItem.type === "credit" ? creditDiv : debitDiv;
        let cssClass = expItem.type === "credit" ? "credit-item" : "debit-item";
        let template = `
    <div class='${cssClass}'>
      <div class="exp-desc">${expItem.description}</div>
      <div class="exp-amount">${expItem.amount}</div>
      <div class="exp-btn"><button class="delete-expense" onclick="deleteExpense(${expItem.id})">X</button></div>
    </div>
    `;
        containerDiv === null || containerDiv === void 0 ? void 0 : containerDiv.insertAdjacentHTML("beforeend", template);
    }
}
function calculateTotal() {
    return expenseItems.reduce((total, exp) => {
        let amount = exp.amount;
        if (exp.type === "debit") {
            amount = -exp.amount;
        }
        total += amount;
        return total;
    }, 0);
}
function displayTotalAmount() {
    totalAmountDiv.textContent = totalAmount.toString();
}
class Expense {
    constructor(type, desc, amount) {
        this.id = 0;
        this.type = "debit";
        this.description = "";
        this.amount = 0;
        this.type = type;
        this.description = desc;
        this.amount = amount;
        this.id = ++Expense.currentId;
    }
}
Expense.currentId = 0;
addExpBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let type = expType.value === "credit" ? "credit" : "debit";
    const exp = new Expense(type, expDesc.value, +expAmt.value);
    expenseItems.push(exp);
    displayExpenseItems();
    totalAmount = calculateTotal();
    displayTotalAmount();
});
function deleteExpense(id) {
    let exp = expenseItems.find((ex, i) => {
        return ex.id === id;
    });
    let itemIndex = expenseItems.indexOf(exp);
    expenseItems.splice(itemIndex, 1);
    displayExpenseItems();
    updateTotal(exp);
}
function updateTotal(exp) {
    let amount = exp.amount;
    if (exp.type === "credit") {
        totalAmount -= amount;
    }
    else {
        totalAmount += amount;
    }
    displayTotalAmount();
}
