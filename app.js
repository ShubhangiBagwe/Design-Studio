/* Created by Tivotal */

$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $("nav").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $(".fa-bars").removeClass("fa-times");
    $("nav").removeClass("nav-toggle");
  });

  $(".count").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 6000,
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum + "+");
        },
      }
    );
  });

  $(".project").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // client
  var copy = document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copy);


  //  about
  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
});
