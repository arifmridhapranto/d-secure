function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

$("#v-tabs-tab a").click(function (e) {
  e.preventDefault();
  $(this).tab("show");
});