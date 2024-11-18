document.querySelector("form").addEventListener("submit", function (event) {
  // Target Checkboxes input (learning style)
  const checkboxes = document.querySelectorAll('input[name="learning-style"]:checked');
  // Target Error message div
  const errorMessage = document.getElementById("learning-style-error");
  // Prevent submission (actual submission to be implemented later)
  event.preventDefault();

  // Submit Logic
  // Checking if at least one checkbox is selected
  if (checkboxes.length === 0) {
    errorMessage.style.display = "block"; // Display error message
  } else {
    // Form is valid and submission is successful

    // Hide the form
    document.querySelector("form").style.display = "none";

    // Show thank-you message
    document.getElementById("thank-you-message").style.display = "flex";

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// Hide error message Logic
// Target ALL checkboxes input (learning style)
document.querySelectorAll('input[name="learning-style"]').forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    // Target Error message div
    const errorMessage = document.getElementById("learning-style-error");
    // Target Checkboxes input (learning style)
    const checkboxes = document.querySelectorAll('input[name="learning-style"]:checked');

    // Hide the error message if any checkbox is selected
    if (checkboxes.length > 0) {
      errorMessage.style.display = "none";
    }
  });
});
