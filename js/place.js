const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed'); // إخفاء أو إظهار الشريط الجانبي

    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.classList.remove('rotate'); // إزالة التدوير
    } else {
        toggleBtn.classList.add('rotate'); // تدوير السهم 90 درجة
    }
});

document.querySelector('.dropdown-toggle').addEventListener('click', function () {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

const options = document.querySelectorAll('.dropdown-content div');
options.forEach(option => {
    option.addEventListener('click', function () {
        const selectedUser = this.getAttribute('data-value');
        document.getElementById('selected-user').innerText = selectedUser;
        document.querySelector('.dropdown-content').style.display = 'none';
    });
});

// Close dropdown if clicked outside
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}


document.getElementById('paymentForm').addEventListener('change', function(event) {
    const cardDetails = document.getElementById('cardDetails');
    const bankDetails = document.getElementById('bankDetails');

    // Show/hide inputs based on the selected payment method
    if (event.target.name === 'paymentMethod') {
        if (event.target.value === 'bankTransfer') {
            cardDetails.style.display = 'none';
            bankDetails.style.display = 'block';
        } else {
            cardDetails.style.display = 'block';
            bankDetails.style.display = 'none';
        }
    }
});