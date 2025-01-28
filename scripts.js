// Wait until the DOM is fully loaded
/*
document.addEventListener("DOMContentLoaded", function() {
    // Get all the "Show More" buttons
    const showMoreButtons = document.querySelectorAll('.show-more-btn');
    
    // Loop through each button and add a click event listener
    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the corresponding more-info section
            const moreInfoSection = this.nextElementSibling;
            
            // Toggle the visibility of the more-info section
            if (moreInfoSection.style.display === "none" || moreInfoSection.style.display === "") {
                moreInfoSection.style.display = "block";
                this.textContent = "Show Less"; // Change button text to "Show Less"
            } else {
                moreInfoSection.style.display = "none";
                this.textContent = "Show More"; // Change button text to "Show More"
            }
        });
    });
}); */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio site loaded!");
});
