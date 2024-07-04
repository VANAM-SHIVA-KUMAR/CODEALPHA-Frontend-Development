document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];
    const images = document.querySelectorAll(".gallery img");
    const navLinks = document.querySelectorAll("header nav ul li a");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;

            // Add animation class
            modalImg.classList.add('zoomIn');
        });
    });

    closeBtn.addEventListener("click", function () {
        closeModal();
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        // Add fade-out animation
        modal.classList.add('fadeOut');

        // Wait for the animation to finish before hiding the modal
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove('fadeOut');
            modalImg.classList.remove('zoomIn');
        }, 500); // Match the duration of the fadeOut animation
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - header.offsetHeight,
                behavior: "smooth"
            });
        });
    });
});
