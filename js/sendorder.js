// الشريط الجانبي
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

// التحقق من أن الأزرار موجودة في DOM قبل إضافة مستمعات الأحداث
if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed'); // إخفاء أو إظهار الشريط الجانبي

        // تعديل الأيقونة بناءً على حالة الشريط الجانبي
        if (sidebar.classList.contains('collapsed')) {
            toggleBtn.classList.remove('rotate'); // إزالة التدوير
        } else {
            toggleBtn.classList.add('rotate'); // تدوير السهم 90 درجة
        }
    });
}

// القائمة المنسدلة
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// التحقق من وجود القائمة المنسدلة في DOM
if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // إضافة مستمع الأحداث لجميع الخيارات في القائمة المنسدلة
    const options = document.querySelectorAll('.dropdown-content div');
    options.forEach(option => {
        option.addEventListener('click', function () {
            const selectedUser = this.getAttribute('data-value');
            document.getElementById('selected-user').innerText = selectedUser;
            dropdownMenu.style.display = 'none'; // إخفاء القائمة بعد الاختيار
        });
    });

    // إغلاق القائمة المنسدلة عند النقر خارجها
    window.onclick = function (event) {
        if (!event.target.matches('.dropdown-toggle')) {
            dropdownMenu.style.display = 'none'; // إخفاء القائمة المنسدلة
        }
    };
}

// التحكم في الحزم
function selectPackage(card) {
    const cards = document.querySelectorAll('.card');

    // إزالة تحديدات سابقة
    cards.forEach(c => c.classList.remove('selected'));

    // إضافة التحديد للكارد المختار
    card.classList.add('selected');
}

// التحكم في الخطوات المستقبلية

let progressline1 = document.getElementById("progress-line-2") 
let circle2 = document.getElementById("circle-2") 


function nextStep() {
    console.log('Next Step');
    progressline1.classList.add("active")
    console.log(progressline1)
    circle2.classList.add("active")

    // Hide step 1
    document.getElementById('step-1').classList.remove('active');
    document.getElementById('step-1').classList.add('d-none');
    
    // Show step 2
    document.getElementById('step-2').classList.remove('d-none');
    document.getElementById('step-2').classList.add('active');
}
function backStep() {
    console.log('Back Step');
    progressline1.classList.remove("active")
    console.log(progressline1)
    circle2.classList.remove("active")

    // Hide step 2
    document.getElementById('step-2').classList.remove('active');
    document.getElementById('step-2').classList.add('d-none');

    // Show step 1
    document.getElementById('step-1').classList.remove('d-none');
    document.getElementById('step-1').classList.add('active');
}