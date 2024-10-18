const fileUploadArea = document.getElementById('file-upload-area');
const fileInput = document.getElementById('file-input');

fileUploadArea.addEventListener('click', function () {
  fileInput.click();
});

// دعم السحب والإفلات
fileUploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  fileUploadArea.style.backgroundColor = '#e8f0fe';
});

fileUploadArea.addEventListener('dragleave', () => {
  fileUploadArea.style.backgroundColor = '#f9f9f9'; 
});

fileUploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  fileUploadArea.style.backgroundColor = '#f9f9f9'; 
  const files = e.dataTransfer.files;
  fileInput.files = files;
  handleFileUpload(files[0]);
});

function handleFileUpload(file) {
  if (file.size > 5 * 1024 * 1024) {
    alert('حجم الملف أكبر من 5 ميجابايت');
  } else {
    alert(`تم اختيار الملف: ${file.name}`);
  }
}

