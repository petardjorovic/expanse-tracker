// ACCESS DOM ELEMENTS FROM TYPESCRIPT
const expType = document.getElementById("expense-type")! as HTMLSelectElement;
const expDesc = document.getElementById("desc")! as HTMLInputElement;
const expAmt = <HTMLInputElement>document.getElementById("amount");
const addExpBtn = document.querySelector(
  ".add-expense-btn"
)! as HTMLButtonElement;
const debitDiv = document.querySelector(
  ".expense-debit-item-container"
)! as HTMLDivElement;
const creditDiv = document.querySelector(
  ".expense-credit-item-container"
)! as HTMLDivElement;
const totalAmountDiv = document.querySelector(
  ".total-expense-amount"
)! as HTMLDivElement;

let expenseItems: Expense[] = [];
let totalAmount: number = 0;

function displayExpenseItems() {
  debitDiv.innerHTML = "";
  creditDiv.innerHTML = "";
  for (let i = 0; i < expenseItems.length; i++) {
    let expItem = expenseItems[i];
    let containerDiv = expItem.type === "credit" ? creditDiv : debitDiv;

    let cssClass = expItem.type === "credit" ? "credit-item" : "debit-item";
    let template: string = `
    <div class='${cssClass}'>
      <div class="exp-desc">${expItem.description}</div>
      <div class="exp-amount">${expItem.amount}</div>
      <div class="exp-btn"><button class="delete-expense" onclick="deleteExpense(${expItem.id})">X</button></div>
    </div>
    `;
    containerDiv?.insertAdjacentHTML("beforeend", template);
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
  private static currentId: number = 0;
  readonly id: number = 0;
  type: "credit" | "debit" = "debit";
  description: string = "";
  amount: number = 0;

  constructor(type: "credit" | "debit", desc: string, amount: number) {
    this.type = type;
    this.description = desc;
    this.amount = amount;
    this.id = ++Expense.currentId;
  }
}

addExpBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let type: "credit" | "debit" =
    expType.value === "credit" ? "credit" : "debit";
  const exp = new Expense(type, expDesc.value, +expAmt.value);
  expenseItems.push(exp);
  displayExpenseItems();
  totalAmount = calculateTotal();
  displayTotalAmount();
});

function deleteExpense(id: number) {
  let exp: Expense = expenseItems.find((ex, i) => {
    return ex.id === id;
  }) as Expense;
  let itemIndex: number = expenseItems.indexOf(exp);
  expenseItems.splice(itemIndex, 1);

  displayExpenseItems();

  updateTotal(exp);
}

function updateTotal(exp: Expense) {
  let amount: number = exp.amount;
  if (exp.type === "credit") {
    totalAmount -= amount;
  } else {
    totalAmount += amount;
  }
  displayTotalAmount();
}
