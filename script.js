var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");
const nest = document.querySelector('.dropdown');
 const body = document.querySelector('body');

function toggleModal() {
  const modal = document.querySelector('.modal'); 
  const parent = document.querySelector('.parent');
  const child = document.querySelector('.child');
  

  modal.classList.toggle("show-modal");

  if (modal.classList.contains("show-modal")) {
    parent.style.display = "none";
    body.style.overflow = 'hidden';

  } else {
    parent.style.display = "block";

  }

}



function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

// 

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function showFormInModal(formId) {
  const formContent = document.getElementById(formId).innerHTML;
  document.getElementById('modal-body-content').innerHTML = formContent;
  toggleModal();

}

function updateDropdown(buttonId, value) {
  const dropdownButton = document.getElementById(buttonId);
	dropdownButton.innerHTML = `<i class="fa-solid fa-rupee-sign"></i> &nbsp;&nbsp;&nbsp;${value}`;

}






  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('paymentModal');
    modal.classList.remove('show-modal');
        body.style.overflow = 'auto';
    // Show the dropdown menu again when the modal is closed
    document.getElementById('dpd').querySelector('.dropdown-menu').style.display = 'none';
  }

  // Event listener for the close button
  document.querySelector('.close-button').addEventListener('click', closeModal);

  // Close modal when clicking outside the modal content
  window.onclick = function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target == modal) {
      closeModal();
    }
  };

  function toggleDropdown(buttonId) {
    document.getElementById(buttonId).querySelector('.dropdown-menu').style.display = 'block';
  }
  








