const dropdownValue = document.querySelector(".dropdown__value");
const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown__list")
const dropdownItem = document.querySelectorAll(".dropdown__item");
const dropdownLinks = Array.from(document.querySelectorAll(".dropdown__link"));

const openMenu = () => {
    dropdownList.classList.toggle("dropdown__list_active");
}
    
dropdownLinks.forEach(elem => {
    elem.addEventListener("click", event => {
        dropdownValue.textContent = elem.textContent;
        dropdownList.classList.toggle("dropdown__list_active");
        event.preventDefault();
    })
});

dropdownValue.addEventListener("click", openMenu);


