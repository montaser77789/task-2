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


// Get elements
const notificationBell = document.getElementById('notification-bell'); // Ensure ID matches HTML
const notificationDropdown = document.getElementById('notification-dropdown');
const messageIcon = document.getElementById('message-icon'); // Ensure ID matches HTML
const messageDropdown = document.getElementById('message-dropdown');

// Toggle visibility of dropdown when clicking the bell icon
notificationBell.addEventListener('click', function () {
    console.log('clicked');
    
    notificationDropdown.style.display = notificationDropdown.style.display === 'block' ? 'none' : 'block';
    console.log(notificationDropdown.style.display);
    messageDropdown.style.display = 'none';

    console.log(messageDropdown.style.display);
    
    
});

// Toggle visibility of dropdown when clicking the message icon
messageIcon.addEventListener('click', function () {
    console.log('clicked');
    
    messageDropdown.style.display = messageDropdown.style.display === 'block' ? 'none' : 'block';
    notificationDropdown.style.display = 'none';
    console.log(notificationDropdown.style.display);
    

    console.log(messageDropdown.style.display);

});

// Hide dropdown when clicking outside of the icons
window.addEventListener('click', function (e) {
    if (!e.target.matches('.fa-bell') && !e.target.matches('.fa-envelope')) {
        notificationDropdown.style.display = 'none';
        messageDropdown.style.display = 'none';
    }
});

document.querySelectorAll('.toggle-submenu').forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault(); // منع الرابط من إعادة التحميل
        const subMenu = this.nextElementSibling; // القائمة الفرعية التالية
        subMenu.classList.toggle('open'); // إضافة أو إزالة كلاس "open"
        
        const arrowIcon = this.querySelector('.arrow-icon'); // السهم
        arrowIcon.classList.toggle('rotate'); // دوران السهم
    });
});


// استهداف جميع الروابط في الشريط الجانبي
const navLinks = document.querySelectorAll('.nav-item ');

// إضافة حدث النقر لكل رابط
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log('clicked');
        
        // إزالة فئة 'active' من جميع الروابط
        navLinks.forEach(link => link.classList.remove('active'));
        
        // إضافة فئة 'active' للرابط الذي تم النقر عليه
        this.classList.add('active');
    });
});

