// Thêm mã JavaScript sau cùng trong tệp HTML hoặc liên kết từ một tệp .js riêng
document.addEventListener("DOMContentLoaded", function () {
  var headerContent = document.querySelector(".header__content");

  window.addEventListener("scroll", function () {
    if (window.scrollY > headerContent.offsetHeight) {
      headerContent.classList.add("scrolled");
    } else {
      headerContent.classList.remove("scrolled");
    }
  });
});
