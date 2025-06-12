const modal = document.querySelector('.modal');
const maskModal = document.querySelector('.mask-modal');


function showModal() {
    modal.style.left = '50%';
    maskModal.style.visibility = 'visible';
};

function hideModal() {
    modal.style.left= '-50%';
    maskModal.style.visibility = 'hidden';
};