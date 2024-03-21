const cases = Array.from(document.querySelectorAll(".rotator__case"));

setInterval(() => {
    const index = cases.findIndex(item => item.classList.contains("rotator__case_active"));
    let currrentCase = cases[index];
    currrentCase.classList.remove("rotator__case_active");
    currrentCase = Math.floor(Math.random() * cases.length);
    cases[currrentCase].classList.add("rotator__case_active");
}, 1000);
