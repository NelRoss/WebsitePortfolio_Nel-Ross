/* =========================================================
   AUTOMATIC NAVIGATION ACTIVE STATE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    const navLinks =
        document.querySelectorAll(
            ".nav-links .nav-link"
        );


    /*
        Get current page filename.
    */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    /*
        If no filename exists,
        use Home.html.
    */

    if (
        currentPage === "" ||
        currentPage === "/"
    ) {

        currentPage = "home.html";

    }


    /*
        Check every navigation link.
    */

    navLinks.forEach(link => {


        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (!href) return;


        const linkPage =
            href
                .split("/")
                .pop()
                .split("#")[0]
                .toLowerCase();


        if (
            linkPage === currentPage
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {


    contactForm.addEventListener(
        "submit",
        function (event) {


            event.preventDefault();


            const nameInput =
                document.getElementById("name");


            let name = "";


            if (nameInput) {

                name =
                    nameInput.value.trim();

            }


            if (name !== "") {

                alert(
                    `Thank you, ${name}! Your message has been received.`
                );

            } else {

                alert(
                    "Thank you! Your message has been received."
                );

            }


            contactForm.reset();

        }
    );

}



/* =========================================================
   FOOTER YEAR
========================================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =========================================================
   PROJECT FILTER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (!filterButtons.length || !projectCards.length) {
        return;
    }

    function filterProjects(filter) {

        // Update the active filter button.
        filterButtons.forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.filter === filter
            );
        });

        // Show or hide project cards.
        projectCards.forEach(card => {

            const category = card.dataset.platform;

            const shouldShow =
                filter === "all" || category === filter;

            if (shouldShow) {

                card.style.display = "";

                // Restart the card entrance animation.
                card.style.animation = "none";

                requestAnimationFrame(() => {
                    card.style.animation = "";
                });

            } else {

                card.style.display = "none";

            }

        });

        updateCategoryVisibility();

    }

    // Listen for filter button clicks.
    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterProjects(button.dataset.filter);

        });

    });

    // Hide headings and grids when they contain no visible cards.
    function updateCategoryVisibility() {

        document.querySelectorAll(".category-title").forEach(heading => {

            const grid = heading.nextElementSibling;

            if (!grid || !grid.classList.contains("projects-grid")) {
                return;
            }

            const visibleCards = Array.from(
                grid.querySelectorAll(".project-card")
            ).filter(card => card.style.display !== "none");

            const hasVisibleCards = visibleCards.length > 0;

            heading.style.display = hasVisibleCards ? "flex" : "none";
            grid.style.display = hasVisibleCards ? "grid" : "none";

        });

    }

    // Start with all projects visible.
    filterProjects("all");

});



/* =========================================================
   HIDE EMPTY PROJECT CATEGORIES
========================================================= */

function updateCategoryVisibility() {


    const categories =
        document.querySelectorAll(
            ".category-title"
        );


    categories.forEach(category => {


        const title =
            category.querySelector("h2");


        if (!title) return;


        const categoryName =
            title.textContent
                .trim()
                .toLowerCase();


        const cards =
            category.nextElementSibling;


        if (!cards) return;


        const visibleCards =
            cards.querySelectorAll(
                ".project-card:not([style*='display: none'])"
            );


        if (
            visibleCards.length === 0
        ) {

            category.style.display =
                "none";

            cards.style.display =
                "none";

        } else {

            category.style.display =
                "flex";

            cards.style.display =
                "grid";

        }

    });

}



/* =========================================================
   IMAGE GALLERIES
========================================================= */


/*
    ========================================================
    IMPORTANT
    ========================================================

    Put the exact image filenames from each folder here.

    Example:

    Games Images/
        Anura Defender Gameplay/
            Anura Defender1.png
            Gameplay2.png
            Gameplay3.png

    Then add those filenames below.
*/


const galleries = {


    /* =====================================================
       ANURA DEFENDER
    ===================================================== */

    anura: {

        title: "Anura Defender – Gameplay",

        images: [

            "Games Images/Anura Defender Gameplay/AnuraDefender.png",
            "Games Images/Anura Defender Gameplay/AnuraDefender1.png",
            "Games Images/Anura Defender Gameplay/image_2.png",
            "Games Images/Anura Defender Gameplay/image_3.png",
            "Games Images/Anura Defender Gameplay/image_4.png",
            "Games Images/Anura Defender Gameplay/image_5.png",
            "Games Images/Anura Defender Gameplay/image_6.png"
              

        ]

    },


    /* =====================================================
       ESCAPE NOW
    ===================================================== */

    escape: {

        title: "Escape Now – Gameplay",

        images: [

            "Games Images/Escape Now Gameplay/image_1.png",
            "Games Images/Escape Now Gameplay/image_2.png",
            "Games Images/Escape Now Gameplay/image_3.png",
            "Games Images/Escape Now Gameplay/image_4.png",
            "Games Images/Escape Now Gameplay/image_5.png"

        ]

    },


    /* =====================================================
       SANTELMO
    ===================================================== */

    santelmo: {

        title: "Santelmo – Gameplay",

        images: [

            "Games Images/Santelmo Gameplay/image.png",
            "Games Images/Santelmo Gameplay/image_1.png",
            "Games Images/Santelmo Gameplay/image_2.png",
            "Games Images/Santelmo Gameplay/image_3.png",
            "Games Images/Santelmo Gameplay/image_4.png",
            "Games Images/Santelmo Gameplay/image_5.png",
            "Games Images/Santelmo Gameplay/image_6.png",
            "Games Images/Santelmo Gameplay/image_7.png",
            "Games Images/Santelmo Gameplay/image_8.png",

           

        ]

    },


    /* =====================================================
       TWISTALE
    ===================================================== */

    twistale: {

        title: "TWISTALE – Gameplay",

        images: [

            "Games Images/TWISTALE GAMEPLAY/TwistalePoster.png",
            "Games Images/TWISTALE GAMEPLAY/Twistale1.png",
            "Games Images/TWISTALE GAMEPLAY/Twistale2.png",
            "Games Images/TWISTALE GAMEPLAY/Twistale3.png",
            "Games Images/TWISTALE GAMEPLAY/Twistale4.png",
            "Games Images/TWISTALE GAMEPLAY/Twistale5.png",
            "Games Images/TWISTALE GAMEPLAY/Twistale6.png"

        

        ]

    }

};



/* =========================================================
   GALLERY VARIABLES
========================================================= */

const imageModal =
    document.getElementById(
        "imageModal"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const galleryTitle =
    document.getElementById(
        "galleryTitle"
    );


const galleryCounter =
    document.getElementById(
        "galleryCounter"
    );


let currentGallery = null;


let currentImageIndex = 0;



/* =========================================================
   OPEN GALLERY
========================================================= */

function openGallery(galleryName) {


    if (
        !imageModal ||
        !modalImage
    ) {

        return;

    }


    const gallery =
        galleries[galleryName];


    /*
        Make sure gallery exists.
    */

    if (
        !gallery ||
        !gallery.images ||
        gallery.images.length === 0
    ) {

        console.error(
            "Gallery not found:",
            galleryName
        );

        return;

    }


    /*
        Set current gallery.
    */

    currentGallery =
        gallery;


    /*
        Start at first image.
    */

    currentImageIndex =
        0;


    /*
        Display image.
    */

    updateGallery();


    /*
        Show modal.
    */

    imageModal.classList.add(
        "show"
    );


    /*
        Prevent background scrolling.
    */

    document.body.style.overflow =
        "hidden";

}



/* =========================================================
   UPDATE GALLERY
========================================================= */

function updateGallery() {


    if (!currentGallery) {

        return;

    }


    /*
        Get current image.
    */

    const image =
        currentGallery.images[
            currentImageIndex
        ];


    /*
        Change image.
    */

    modalImage.src =
        image;


    /*
        Change title.
    */

    if (galleryTitle) {

        galleryTitle.textContent =
            currentGallery.title;

    }


    /*
        Change counter.

        Example:

        1 / 7
        2 / 7
        3 / 7
    */

    if (galleryCounter) {

        galleryCounter.textContent =
            `${currentImageIndex + 1} / ${currentGallery.images.length}`;

    }

}



/* =========================================================
   NEXT IMAGE
========================================================= */

function nextImage() {


    if (!currentGallery) {

        return;

    }


    currentImageIndex++;


    /*
        Loop back to first image.
    */

    if (
        currentImageIndex >=
        currentGallery.images.length
    ) {

        currentImageIndex =
            0;

    }


    updateGallery();

}



/* =========================================================
   PREVIOUS IMAGE
========================================================= */

function previousImage() {


    if (!currentGallery) {

        return;

    }


    currentImageIndex--;


    /*
        Loop to last image.
    */

    if (
        currentImageIndex < 0
    ) {

        currentImageIndex =
            currentGallery.images.length - 1;

    }


    updateGallery();

}



/* =========================================================
   CLOSE GALLERY
========================================================= */

function closeImage() {


    if (!imageModal) {

        return;

    }


    /*
        Hide modal.
    */

    imageModal.classList.remove(
        "show"
    );


    /*
        Restore scrolling.
    */

    document.body.style.overflow =
        "";


    /*
        Clear image.
    */

    if (modalImage) {

        modalImage.src =
            "";

    }


    /*
        Reset gallery.
    */

    currentGallery =
        null;


    currentImageIndex =
        0;

}



/* =========================================================
   CLICK OUTSIDE TO CLOSE
========================================================= */

if (imageModal) {


    imageModal.addEventListener(
        "click",
        event => {


            /*
                Only close if the user
                clicked the dark background.
            */

            if (
                event.target === imageModal
            ) {

                closeImage();

            }

        }
    );

}



/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    event => {


        /*
            Don't do anything if
            gallery isn't open.
        */

        if (!currentGallery) {

            return;

        }


        /*
            ESC
        */

        if (
            event.key === "Escape"
        ) {

            closeImage();

        }


        /*
            RIGHT ARROW
        */

        else if (
            event.key === "ArrowRight"
        ) {

            nextImage();

        }


        /*
            LEFT ARROW
        */

        else if (
            event.key === "ArrowLeft"
        ) {

            previousImage();

        }

    }
);



/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCategoryVisibility();

    }
);



/* =========================================================
   DESIGN IMAGE VIEWER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const viewButtons = document.querySelectorAll(".design-view-btn");

    // Create the full-image modal without a close button.
    const modal = document.createElement("div");
    modal.className = "design-image-modal";

    modal.innerHTML = `
        <img class="design-modal-image" src="" alt="">
        <div class="design-modal-caption"></div>
    `;

    document.body.appendChild(modal);

    const modalImage = modal.querySelector(".design-modal-image");
    const modalCaption = modal.querySelector(".design-modal-caption");

    function openDesignImage(imagePath, title) {
        modalImage.src = imagePath;
        modalImage.alt = title;
        modalCaption.textContent = title;

        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    }

    function closeDesignImage() {
        modal.classList.remove("show");
        document.body.style.overflow = "";
        modalImage.src = "";
    }

    // Open the selected design.
    viewButtons.forEach(button => {
        button.addEventListener("click", () => {
            openDesignImage(
                button.dataset.image,
                button.dataset.title || "Design"
            );
        });
    });

    // Close when clicking the dark background.
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeDesignImage();
        }
    });

    // Close using the Escape key.
    document.addEventListener("keydown", event => {
        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {
            closeDesignImage();
        }
    });
});

