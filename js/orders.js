const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.classList.remove('rotate'); 
    } else {
        toggleBtn.classList.add('rotate');
    }
});
document.querySelector('.dropdown-toggle').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

const options = document.querySelectorAll('.dropdown-content div');
options.forEach(option => {
    option.addEventListener('click', function() {
        const selectedUser = this.getAttribute('data-value');
        document.getElementById('selected-user').innerText = selectedUser;
        document.querySelector('.dropdown-content').style.display = 'none';
    });
});

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}