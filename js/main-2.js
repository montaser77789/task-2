// const trademarkBtn = document.getElementById("trademark-btn");
// const storeBtn = document.getElementById("store-btn");

// const form1 = document.querySelector(".form-1");
// const form2 = document.querySelector(".form-2");

// trademarkBtn.addEventListener("click", () => {
//     if (!form1.classList.contains("active")) {
//         form2.classList.add("flip-out");
//         setTimeout(() => {
//             form2.classList.remove("active", "flip-out");
//             form1.classList.add("active");
//         }, 300);
//     }
// });

// storeBtn.addEventListener("click", () => {
//     if (!form2.classList.contains("active")) {
//         form1.classList.add("flip-out");
//         setTimeout(() => {
//             form1.classList.remove("active", "flip-out");
//             form2.classList.add("active");
//         }, 300);
//     }
// });
const trademarkBtn = document.getElementById("trademark-btn");
const storeBtn = document.getElementById("store-btn");

trademarkBtn.addEventListener("click", function() {
    trademarkBtn.classList.add("active");
    storeBtn.classList.remove("active");
    
    // تحديث الأيقونات
    trademarkBtn.querySelector("i").style.display = "inline";
    storeBtn.querySelector("i").style.display = "none";
});

storeBtn.addEventListener("click", function() {
    storeBtn.classList.add("active");
    trademarkBtn.classList.remove("active");
    
    // تحديث الأيقونات
    storeBtn.querySelector("i").style.display = "inline";
    trademarkBtn.querySelector("i").style.display = "none";
});

window.onload = function() {
    document.getElementById('email').focus();
  };

  trademarkBtn.addEventListener('click', function() {
    // منع النموذج من الإرسال إذا لزم الأمر
    document.getElementById('login-form').action = '/trademark-page';
    document.getElementById('login-form') // يرسل النموذج إلى الصفحة المحددة
  });

  storeBtn.addEventListener('click', function() {
    document.getElementById('login-form').action = '/store-page';
    document.getElementById('login-form') // يرسل النموذج إلى الصفحة المحددة
  });




