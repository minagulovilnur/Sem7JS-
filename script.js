/*1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использ
овать методы forEach и querySelectorAll и свойство classList у элементов.*/
console.log(`1 задание`);
const dropdownItem = document.querySelectorAll("a");
dropdownItem.forEach((element) => {
  element.classList.add("super-dropdown");
});
console.log(dropdownItem);

/*2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.*/
console.log(`2 задание`);
const btnSec = document.querySelector("button");

if (btnSec.classList.contains("btn-secondary") === true) {
  // проверка на наличие класса "btn-secondary"
  btnSec.classList.remove("btn-secondary");
  console.log(btnSec);
} else {
  console.log(btnSec.classList.add("btn-secondary")); //добавление класса если его нет.
}

/*3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
[]()*/
console.log(`3 задание`);

const dropDownMenu = document.querySelectorAll(".menu");
dropDownMenu.forEach((element) => {
  element.classList.remove("dropdown-menu");
});
console.log(dropDownMenu);

/*4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`*/
console.log(`4 задание`);
const insertDrop = document.querySelector("div.dropdown");
insertDrop.insertAdjacentHTML("afterBegin", '<a href="#">link</a');

console.log(insertDrop);

/*5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
[]()*/
console.log(`5 задание`);

const changeId = (document.getElementById("dropdownMenuButton").id =
  "superDropdown");
console.log(changeId);

/*6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.*/
console.log(`6 задание`);

const dataSet = document.querySelector("div.menu ");
dataSet.setAttribute("ddata-dd", "3");
console.log(dataSet);

/*7. Удалите атрибут type у элемента с классом "dropdown-toggle".*/
console.log(`7 задание `);

const deleteAtribute = document.querySelector("button ");
deleteAtribute.removeAttribute("type");
console.log(deleteAtribute);
