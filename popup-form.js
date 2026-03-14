// Show popup form
function showPopupForm() {
  const popup = document.querySelector('.popupForm');
  popup.style.display = 'block';
  popup.style.zIndex = '1001';
  popup.classList.add('show');
}

// Close popup form
function closePopupForm() {
  const popup = document.querySelector('.popupForm');
  popup.style.display = 'none';
  popup.style.zIndex = '-999';
  popup.classList.remove('show');
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Open popup on button click
  const formBtns = document.querySelectorAll('.formBtn, .button[href="contact.html"]');
  formBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      showPopupForm();
    });
  });

  // Close popup on close button click
  const closeBtn = document.querySelector('.popupForm__close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closePopupForm);
  }
});