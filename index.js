let accordions = document.querySelectorAll(".accordion"); 
accordions.forEach(acco => {
    acco.onclick = () => {
        accordions.forEach(notActive => {notActive.classList.remove("active");});
        acco.classList.add("active");
    }
});