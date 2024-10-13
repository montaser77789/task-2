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
document.addEventListener('DOMContentLoaded', () => {
    const productTableBody = document.getElementById('product-table-body');
    const notification = document.getElementById('notification');

    // مصفوفة لتخزين المنتجات المضافة
    const addedProducts = [];

    // وظيفة لتحديث حالة الأزرار في المودال بناءً على المنتجات في المصفوفة
    const updateModalButtons = () => {
        const addButtons = document.querySelectorAll('.add-product-btn, .remove-product-btn');
        addButtons.forEach(button => {
            const productName = button.getAttribute('data-name');
            const isAdded = addedProducts.some(product => product.name === productName);

            if (isAdded) {
                button.innerText = 'حذف';
                button.classList.add('remove-product-btn');
                button.classList.remove('add-product-btn');
            } else {
                button.innerText = 'إضافة';
                button.classList.add('add-product-btn');
                button.classList.remove('remove-product-btn');
            }
        });
    };

    // التعامل مع أزرار الإضافة والحذف في المودال
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-product-btn') || event.target.classList.contains('remove-product-btn')) {
            const productName = event.target.getAttribute('data-name');
            const productPrice = event.target.getAttribute('data-price');

            // تحقق مما إذا كان المنتج مضاف مسبقاً
            const existingProductIndex = addedProducts.findIndex(product => product.name === productName);

            if (existingProductIndex === -1) {
                // إضافة المنتج إلى المصفوفة
                addedProducts.push({ name: productName, price: productPrice });
                notification.textContent = 'تم إضافة المنتج بنجاح!';
            } else {
                // حذف المنتج من المصفوفة
                addedProducts.splice(existingProductIndex, 1);
                notification.textContent = 'تم حذف المنتج بنجاح!';
            }

            // تحديث حالة الأزرار في المودال
            updateModalButtons();

            // إخفاء الرسالة بعد 3 ثواني
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }
    });

    // تأكيد إضافة المنتجات إلى الجدول
    const confirmButton = document.getElementById('confirm-button');
    if (confirmButton) {
        confirmButton.addEventListener('click', () => {
            // مسح الجدول قبل إعادة إضافة المنتجات
            productTableBody.innerHTML = '';

            addedProducts.forEach(product => {
                const newRow = document.createElement('tr');

                newRow.innerHTML = `
                    <td class="font-light">1</td>
                    <td class="font-light">
                        <img class="table-img" src="./images/Rectangle 1.png" alt="Profile"/>
                        ${product.name}
                    </td>
                    <td class="font-light">${product.price}</td>
                    <td class="font-light"><input type="number" class="table-quantity" value="1"></td>
                    <td class="font-light"><input type="number" class="table-quantity" value="1"></td>
                    <td class="font-light table-x"><i class="fa-solid fa-x"></i></td>
                `;

                productTableBody.appendChild(newRow);

                // إضافة زر الحذف لكل منتج في الجدول
                const deleteBtn = newRow.querySelector('.table-x');
                deleteBtn.addEventListener('click', () => {
                    // حذف المنتج من الجدول
                    productTableBody.removeChild(newRow);

                    // تحديث المصفوفة بعد الحذف
                    const productIndex = addedProducts.findIndex(p => p.name === product.name);
                    if (productIndex !== -1) {
                        addedProducts.splice(productIndex, 1);
                    }

                    // تحديث حالة الأزرار في المودال
                    updateModalButtons();

                    // عرض إشعار بعد الحذف
                    notification.textContent = 'تم حذف المنتج من الجدول بنجاح!';
                    notification.style.display = 'block';
                    setTimeout(() => {
                        notification.style.display = 'none';
                    }, 3000);
                });
            });

            // إغلاق الـ modal بعد التأكيد
            const modalElement = document.getElementById('exampleModalToggle');
            const modal = bootstrap.Modal.getInstance(modalElement);
            if (modal) {
                modal.hide();
            } else {
                console.error('Modal instance not found');
            }
        });
    }
});
