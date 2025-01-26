document.addEventListener("DOMContentLoaded", () => {
  const changePlanLink = document.querySelector(".change-plan");
  const popupModal = document.getElementById("popup-modal");
  const closeModalButton = document.getElementById("close-modal");
  const modalOptions = document.querySelectorAll(".modal-option");

  const planTitle = document.querySelector(".annual-plan h2");
  const planPrice = document.querySelector(".plan-price");

  // Show the modal when clicking "Change"
  changePlanLink.addEventListener("click", (e) => {
    e.preventDefault();
    popupModal.classList.remove("hidden");
  });

  // Close the modal when clicking the close button
  closeModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    popupModal.classList.add("hidden");
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === popupModal) {
      popupModal.classList.add("hidden");
    }
  });

  // Update the plan when a modal option is clicked
  modalOptions.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedPlan = button.getAttribute("data-plan");
      const selectedPrice = button.getAttribute("data-price");

      planTitle.textContent = selectedPlan;
      planPrice.textContent = selectedPrice;

      // Hide the modal
      popupModal.classList.add("hidden");
    });
  });
});
