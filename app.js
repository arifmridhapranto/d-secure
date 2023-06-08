function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

$("#v-tabs-tab a").click(function (e) {
  e.preventDefault();
  $(this).tab("show");
});

// $("#font-change").on("input", function () {
//   $(".blog-sub-title ").css("font-size", $(this).val() + "px");
//   console.log($(this).val() + "px");
//   $(".result").html( $(this).val() );
// });


$(document).on("input", "#font-change", function () {
  $("#result").html($(this).val() + "px");
  $(".blog-sub-title ").css("font-size", $(this).val() + "px");
});


// single blog page menu item function

$(document).ready(function () {
  $(document).on("scroll", onScroll);

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $("a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $("a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
});