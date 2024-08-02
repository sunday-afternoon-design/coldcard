// jQuery(document).ready(function ($) {
//   $("#products").slick({
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     draggable: true,
//     swipe: true,
//     touchMove: true,
//     centerPadding: "0px",
//     verticalSwiping: true,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     dots: true,
//     customPaging: function (slider, i) {
//       var text = ["Seed Plate", "Open Dime", "Blockclock Mini", "Coldpower"]; // Replace with your text
//       return '<button type="button" data-text="' + text[i] + '"></button>';
//     },
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   });

//   $("#logos").slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 8000,
//     pauseOnHover: false,
//     cssEase: "linear",
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   });
  
//    $("#calculator").slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 8000,
//     pauseOnHover: false,
//     cssEase: "linear",
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   });

//   $("#video-walkthroughs").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="../images/left-arrow.png" alt="Previous"></button>',
//     nextArrow: '<button type="button" class="slick-next  slick-arrow"><img src="../images/right-arrow.png" alt="Next"></button>',
//     responsive: [
//       {
//         breakpoint: 1100, // tablet breakpoint
//         settings: {
//           slidesToShow: 2 ,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 800, // mobile breakpoint
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });

//   //powered

//   $(".item-poweredby").hover(function () {
//     var imageId = $(this).data("image");
//     $(".image-container img").removeClass("active");
//     $("#" + imageId).addClass("active");
//   });

//   $(".item-poweredby").click(function () {
//     var imageId = $(this).data("image");
//     $(".image-container img").removeClass("active");
//     $("#" + imageId).addClass("active");
//   });


//   function updateTitle() {
//     if ($('.prohl-item1').hasClass('active')) {
//         $('#product-title').text('Q');
//         $('#toggle-q').addClass('active');
//         $('#toggle-mk4').removeClass('active');
//     } else if ($('.prohl-item2').hasClass('active')) {
//         $('#product-title').text('MK4');
//         $('#toggle-mk4').addClass('active');
//         $('#toggle-q').removeClass('active');
//     }
// }

// $(document).ready(function() {
//     // Show both prohl-i1tab1 and prohl-i1tab2 on page load
//     $('.prohl-i1tab1').addClass('show');
//     $('.prohl-i1tab2').addClass('show');
//     updateTitle();
// });

// $('.prohl-i1tab1, .prohl-i1tab2').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i1tab1').hasClass('show') && $('.prohl-i1tab2').hasClass('show')) {
//         $('.prohl-i1tab1').removeClass('show');
//         $('.prohl-i1tab2').removeClass('show');
//         $('.prohl-i1tab3').addClass('show');
//         $('.prohl-text').fadeOut('slow');
//     }
// });

// $('.prohl-i1tab3').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i1tab3').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i1tab4').addClass('show');
//     }
// });

// $('.prohl-i1tab4').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i1tab4').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i1tab5').addClass('show');
//     }
// });

// $('.prohl-i1tab5').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i1tab5').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i1tab6').addClass('show');
//     }
// });

// $('.prohl-i1tab6').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i1tab6').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i1tab7').addClass('show');
//     }
// });

// $('.prohl-i1tab7').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i1tab7').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i1tab8').addClass('show');
//     }
// });

// $('.prohl-i1tab8').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i1tab8').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i1tab1').addClass('show');
//         $('.prohl-i1tab2').addClass('show'); // Ensure both tabs are reset
//         $(this).closest('.prohl-item1').removeClass('active');
//         $('.prohl-item2').addClass('active');
//         updateTitle();
//     }
// });

// $('.prohl-i2tab1').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i2tab1').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i2tab2').addClass('show');
//     }
// });

// $('.prohl-i2tab2').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i2tab2').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i2tab3').addClass('show');
//     }
// });

// $('.prohl-i2tab3').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i2tab3').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i2tab4').addClass('show');
//     }
// });

// $('.prohl-i2tab4').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i2tab4').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i2tab5').addClass('show');
//     }
// });

// $('.prohl-i2tab5').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i2tab5').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i2tab6').addClass('show');
//     }
// });

// $('.prohl-i2tab6').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i2tab6').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i2tab7').addClass('show');
//     }
// });

// $('.prohl-i2tab7').on("click", function(e){
//     e.preventDefault();
//     if ($('.prohl-i2tab7').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//         $(this).removeClass('show');
//         $('.prohl-i2tab1').addClass('show');
//         $(this).closest('.prohl-item2').removeClass('active');
//         $('.prohl-item1').addClass('active');
//         updateTitle();
//         $('.prohl-text').fadeIn('slow');
//     }
// });

// $('#toggle-q').on("click", function(e){
//     e.preventDefault();
//     $('.prohl-item1').addClass('active');
//     $('.prohl-item2').removeClass('active');
//     $('#toggle-q').addClass('active');
//     $('#toggle-mk4').removeClass('active');
//     updateTitle();
// });

// $('#toggle-mk4').on("click", function(e){
//     e.preventDefault();
//     $('.prohl-item2').addClass('active');
//     $('.prohl-item1').removeClass('active');
//     $('#toggle-mk4').addClass('active');
//     $('#toggle-q').removeClass('active');
//     updateTitle();
// });

// // Initialize the active button state
// updateTitle();



//   //   function updateTitle() {
//   //       if ($('.prohl-item1').hasClass('active')) {
//   //           $('#product-title').text('Q');
//   //           $('#toggle-q').addClass('active');
//   //           $('#toggle-mk4').removeClass('active');
//   //       } else if ($('.prohl-item2').hasClass('active')) {
//   //           $('#product-title').text('MK4');
//   //           $('#toggle-mk4').addClass('active');
//   //           $('#toggle-q').removeClass('active');
//   //       }
//   //   }

//   //   $('.prohl-i1tab1').on("click", function(e){
//   //       e.preventDefault();
//   //       $(this).removeClass('show');
//   //       $('.prohl-i1tab2').addClass('show');
//   //       $('.prohl-text').fadeOut('slow');
//   //   });

//   //   $('.prohl-i1tab2').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i1tab2').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i1tab3').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i1tab3').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i1tab3').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i1tab4').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i1tab4').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i1tab4').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i1tab5').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i1tab5').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i1tab5').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i1tab6').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i1tab6').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i1tab6').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i1tab7').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i1tab7').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i1tab7').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i1tab8').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i1tab8').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i1tab8').hasClass('show') && $('.prohl-item1').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i1tab1').addClass('show');
//   //           $(this).closest('.prohl-item1').removeClass('active');
//   //           $('.prohl-item2').addClass('active');
//   //           updateTitle();
//   //       }
//   //   });

//   //   $('.prohl-i2tab1').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i2tab1').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i2tab2').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i2tab2').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i2tab2').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i2tab3').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i2tab3').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i2tab3').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i2tab4').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i2tab4').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i2tab4').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i2tab5').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i2tab5').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i2tab5').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i2tab6').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i2tab6').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i2tab6').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i2tab7').addClass('show');
//   //       }
//   //   });

//   //   $('.prohl-i2tab7').on("click", function(e){
//   //       e.preventDefault();
//   //       if($('.prohl-i2tab7').hasClass('show') && $('.prohl-item2').hasClass('active')) {
//   //           $(this).removeClass('show');
//   //           $('.prohl-i2tab1').addClass('show');
//   //           $(this).closest('.prohl-item2').removeClass('active');
//   //           $('.prohl-item1').addClass('active');
//   //           updateTitle();
//   //           $('.prohl-text').fadeIn('slow');
//   //       }
//   //   });

//   //   $('#toggle-q').on("click", function(e){
//   //       e.preventDefault();
//   //       $('.prohl-item1').addClass('active');
//   //       $('.prohl-item2').removeClass('active');
//   //       $('#toggle-q').addClass('active');
//   //       $('#toggle-mk4').removeClass('active');
//   //       updateTitle();
//   //   });

//   //   $('#toggle-mk4').on("click", function(e){
//   //       e.preventDefault();
//   //       $('.prohl-item2').addClass('active');
//   //       $('.prohl-item1').removeClass('active');
//   //       $('#toggle-mk4').addClass('active');
//   //       $('#toggle-q').removeClass('active');
//   //       updateTitle();
//   //   });

//   //   // Initialize the active button state
//   //   updateTitle();


// // Q page Updated Code with first text div shown from start (code start)
// $(document).ready(function() {
//     // Show both prohl-i1tab1-q and prohl-i1tab2-q on page load
//     $('.prohl-i1tab1-q').addClass('show');
//     $('.prohl-i1tab2-q').addClass('show');
// });

// $(".prohl-i1tab1-q, .prohl-i1tab2-q").on("click", function (e) {
//     e.preventDefault();
//     if ($('.prohl-i1tab1-q').hasClass('show') && $('.prohl-i1tab2-q').hasClass('show')) {
//         $('.prohl-i1tab1-q').removeClass('show');
//         $('.prohl-i1tab2-q').removeClass('show');
//         $('.prohl-i1tab3-q').addClass('show');
//         $('.prohl-text-q').fadeOut('slow');
//     }
// });

// $(".prohl-i1tab3-q").on("click", function (e) {
//     e.preventDefault();
//     if (
//         $(".prohl-i1tab3-q").hasClass("show") &&
//         $(".prohl-item1-q").hasClass("active")
//     ) {
//         $(this).removeClass("show");
//         $(".prohl-i1tab4-q").addClass("show");
//     }
// });

// $(".prohl-i1tab4-q").on("click", function (e) {
//     e.preventDefault();
//     if (
//         $(".prohl-i1tab4-q").hasClass("show") &&
//         $(".prohl-item1-q").hasClass("active")
//     ) {
//         $(this).removeClass("show");
//         $(".prohl-i1tab5-q").addClass("show");
//     }
// });

// $(".prohl-i1tab5-q").on("click", function (e) {
//     e.preventDefault();
//     if (
//         $(".prohl-i1tab5-q").hasClass("show") &&
//         $(".prohl-item1-q").hasClass("active")
//     ) {
//         $(this).removeClass("show");
//         $(".prohl-i1tab6-q").addClass("show");
//     }
// });

// $(".prohl-i1tab6-q").on("click", function (e) {
//     e.preventDefault();
//     if (
//         $(".prohl-i1tab6-q").hasClass("show") &&
//         $(".prohl-item1-q").hasClass("active")
//     ) {
//         $(this).removeClass("show");
//         $(".prohl-i1tab7-q").addClass("show");
//     }
// });

// $(".prohl-i1tab7-q").on("click", function (e) {
//     e.preventDefault();
//     if (
//         $(".prohl-i1tab7-q").hasClass("show") &&
//         $(".prohl-item1-q").hasClass("active")
//     ) {
//         $(this).removeClass("show");
//         $(".prohl-i1tab8-q").addClass("show");
//         $(".prohl-text-q").fadeIn("slow");
//     }
// });

// $(".prohl-i1tab8-q").on("click", function (e) {
//     e.preventDefault();
//     if (
//         $(".prohl-i1tab8-q").hasClass("show") &&
//         $(".prohl-item1-q").hasClass("active")
//     ) {
//         $(this).removeClass("show");
//         $(".prohl-i1tab1-q").addClass("show");
//         $(".prohl-i1tab2-q").addClass("show"); // Ensure both tabs are reset
//     }
// });


// // Q page Updated Code with first text div shown from start (code end)

// // Mk4 page Updated Code with first text div shown from start (code Start)

//   $(document).ready(function() {
//     // Show both prohl-i2tab1-mk and prohl-i2tab2-mk on page load
//     $('.prohl-i2tab1-mk').addClass('show');
//     $('.prohl-i2tab2-mk').addClass('show');
// });

// $(".prohl-i2tab1-mk, .prohl-i2tab2-mk").on("click", function (e) {
//     e.preventDefault();
//     if ($('.prohl-i2tab1-mk').hasClass('show') && $('.prohl-i2tab2-mk').hasClass('show')) {
//         $('.prohl-i2tab1-mk').removeClass('show');
//         $('.prohl-i2tab2-mk').removeClass('show');
//         $('.prohl-i2tab3-mk').addClass('show');
//         $('.prohl-text-mk').fadeOut('slow');
//     }
// });

// $(".prohl-i2tab2-mk").on("click", function (e) {
//     e.preventDefault();
//     if (
//       $(".prohl-i2tab2-mk").hasClass("show") &&
//       $(".prohl-item2-mk").hasClass("active")
//     ) {
//       $(this).removeClass("show");
//       $(".prohl-i2tab3-mk").addClass("show");
//     }
//   });

// $(".prohl-i2tab3-mk").on("click", function (e) {
//     e.preventDefault();
//     if (
//       $(".prohl-i2tab3-mk").hasClass("show") &&
//       $(".prohl-item2-mk").hasClass("active")
//     ) {
//       $(this).removeClass("show");
//       $(".prohl-i2tab4-mk").addClass("show");
//     }
//   });

// $(".prohl-i2tab4-mk").on("click", function (e) {
//     e.preventDefault();
//     if (
//       $(".prohl-i2tab4-mk").hasClass("show") &&
//       $(".prohl-item2-mk").hasClass("active")
//     ) {
//       $(this).removeClass("show");
//       $(".prohl-i2tab5-mk").addClass("show");
//     }
//   });

// $(".prohl-i2tab5-mk").on("click", function (e) {
//     e.preventDefault();
//     if (
//       $(".prohl-i2tab5-mk").hasClass("show") &&
//       $(".prohl-item2-mk").hasClass("active")
//     ) {
//       $(this).removeClass("show");
//       $(".prohl-i2tab6-mk").addClass("show");
//     }
//   });

// $(".prohl-i2tab6-mk").on("click", function (e) {
//     e.preventDefault();
//     if (
//       $(".prohl-i2tab6-mk").hasClass("show") &&
//       $(".prohl-item2-mk").hasClass("active")
//     ) {
//       $(this).removeClass("show");
//       $(".prohl-i2tab7-mk").addClass("show");
//       $(".prohl-text-mk").fadeIn("slow");
//     }
//   });

// $(".prohl-i2tab7-mk").on("click", function (e) {
//     e.preventDefault();
//     if (
//       $(".prohl-i2tab7-mk").hasClass("show") &&
//       $(".prohl-item2-mk").hasClass("active")
//     ) {
//       $(this).removeClass("show");
//       $(".prohl-i2tab1-mk").addClass("show");
//       $(".prohl-i2tab2-mk").addClass("show"); // Ensure both tabs are reset
//     }
//   });


// // Mk4 page Updated Code with first text div shown from start (code end)



// });

//horizontal scrolling

// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".prohl-item");

// let scrollTween = gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none", // <-- IMPORTANT!
//     scrollTrigger: {
//       trigger: ".prohl-section",
//       pin: true,
//       scrub: 0.1,
//       //snap: directionalSnap(1 / (sections.length - 1)),
//       end: "+=3000"
//     }
//   });

// text appearing 

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 20%",
        end: "+=200%", 
        scrub: true,
        pin: true
    }
});

tl.to("#text1", { opacity: 1, duration: 0.5 })
  .to("#text1", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text2", { opacity: 1, duration: 0.5 })
  .to("#text2", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#img1", { display: "none", duration: 0 })
  .to("#img2", { display: "inline", duration: 0 })
  .to("#text3", { opacity: 1, duration: 0.5 })
  .to("#text3", { opacity: 0, duration: 0.5 }, "+=0.5")
  .to("#text4", { opacity: 1, duration: 0.5 })
  .to("#text4", { opacity: 0, duration: 0.5 }, "+=0.5")