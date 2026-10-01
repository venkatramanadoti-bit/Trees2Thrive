/* =========================================================
   Trees2Thrive - JavaScript
========================================================= */


/* =========================================================
   1. TEAM NAME
   CHANGE ONLY THIS LINE WHEN YOUR TEAM NAME IS DECIDED
========================================================= */

const TEAM_NAME = "ROOT RISE";


/* =========================================================
   2. WEBSITE LOADED
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Trees2Thrive website loaded successfully! 🌳");


    /* =====================================================
       3. UPDATE TEAM NAME EVERYWHERE
    ====================================================== */

    const teamNameElements = document.querySelectorAll(
        "#teamName, #footerTeamName"
    );

    teamNameElements.forEach(function (element) {

        element.textContent = TEAM_NAME;

    });


    /* =====================================================
       4. SMOOTH SCROLLING
    ====================================================== */

    const navigationLinks = document.querySelectorAll(
        '.nav-links a, .buttons a'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                const targetSection =
                    document.querySelector(targetId);

                if (targetSection) {

                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =====================================================
       5. EXTERNAL SOURCE LINKS
    ====================================================== */

    const sourceLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );

    sourceLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "Opening source:",
                link.textContent.trim()
            );

        });

    });


    /* =====================================================
       6. ACTIVE NAVIGATION
    ====================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    function highlightNavigation() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            if (
                window.scrollY >=
                sectionTop - 180
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        highlightNavigation
    );


    highlightNavigation();


    /* =====================================================
       7. BACK TO TOP BUTTON
    ====================================================== */

    const backToTop =
        document.createElement("button");


    backToTop.textContent = "↑";


    backToTop.id = "backToTop";


    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    backToTop.title =
        "Back to top";


    document.body.appendChild(
        backToTop
    );


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 300) {

                backToTop.style.display =
                    "block";

            } else {

                backToTop.style.display =
                    "none";

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    /* =====================================================
       8. CURRENT YEAR
    ====================================================== */

    const copyright =
        document.querySelector(
            ".copyright"
        );


    if (copyright) {

        const currentYear =
            new Date().getFullYear();


        copyright.textContent =
            "Academic Project — " +
            currentYear;

    }


    /* =====================================================
       9. SOURCE LINK SECURITY
    ====================================================== */

    sourceLinks.forEach(function (link) {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =====================================================
       10. FINAL MESSAGE
    ====================================================== */

    console.log(
        "All Trees2Thrive features are ready! 🌱"
    );

});
