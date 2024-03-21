const reveals = Array.from(document.querySelectorAll(".reveal")); 

document.addEventListener("scroll", () => {
    reveals.forEach(reveal => {
        const top = reveal.getBoundingClientRect().top;
        const bottom = reveal.getBoundingClientRect().bottom;
        console.log(window.innerHeight);
        console.log(top);
    if ((top < window.innerHeight)) {
       setTimeout(() =>reveal.classList.add("reveal_active"), 1000);
    }
    })
});

    
    