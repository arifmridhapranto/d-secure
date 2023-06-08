function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
jQuery(document).ready(function ($) {
  $("#v-tabs-tab a").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});




// $("#font-change").on("input", function () {
//   $(".blog-sub-title ").css("font-size", $(this).val() + "px");
//   console.log($(this).val() + "px");
//   $(".result").html( $(this).val() );
// });


jQuery(document).on("input", "#font-change", function () {
  jQuery("#result").html(jQuery(this).val() + "px");
  jQuery(".blog-sub-title ").css("font-size", jQuery(this).val() + "px");
});


// single blog page menu item function

jQuery(document).ready(function () {
  jQuery(document).on("scroll", onScroll);

  function onScroll(event) {
    var scrollPos = jQuery(document).scrollTop();
    jQuery("a").each(function () {
      var currLink = jQuery(this);
      var refElement = jQuery(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        jQuery("a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
});