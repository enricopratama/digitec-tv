// For scroll function:
    function handleScroll() { 
        const logo = document.querySelector(".logo-digitec"); 
        var scrollY = window.scrollY;
        if (scrollY > 100 && window.innerWidth > 992) {
            logo.style.width = "180px";
        } else if (window.innerWidth < 450) {
            logo.style.width = "60vw";
        } else {
            logo.style.width = "100%";
        }
    }
    window.addEventListener("scroll", handleScroll);

// For hover over function:

    function setLogoFullWidth() {
        const logo = document.querySelector(".logo-digitec");
        logo.style.width = "100%";
    }

    function resetLogoWidth() {
        var scrollY = window.scrollY;
        if (scrollY === 0) {
            logo.style.width = "100%";
        } 
        const logo = document.querySelector(".logo-digitec");
        logo.style.width = "180px";
    }

    const navbar = document.getElementById("main-navbar");
    navbar.addEventListener("mouseover", setLogoFullWidth);
    navbar.addEventListener("mouseleave", resetLogoWidth);