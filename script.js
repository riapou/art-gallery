// یک نمونه کد ساده برای تغییر عکس اول
const fileInput = document.getElementById('upload-btn')
const artImage = document.querySelector('.frame-1 img')

fileInput.addEventListener('change', function (event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = function (e) {
      artImage.src = e.target.result
    }
    reader.readAsDataURL(file)
  }
})
