



const BASE_URL = 'http://localhost/ReservationSystem/';



function url(url) {
   // return trim(BASE_URL, '/ ') + '/' + trim(url, '/ ');
   return BASE_URL.trim('/ ') + url.trim('/');
}


// function load(url) {
//    // display loading image here...
//    document.getElementById('loadingImg').visible = true;
//    // request your data...
//    var req = new XMLHttpRequest();
//    req.open("POST", url, true);

//    req.onreadystatechange = function () {
//        if (req.readyState == 4 && req.status == 200) {
//            // content is loaded...hide the gif and display the content...
//            if (req.responseText) {
//                document.getElementById('content').innerHTML = req.responseText;
//                document.getElementById('loadingImg').visible = false;
//            }
//        }
//    };
//    request.send(vars);
// }
// url('http://localhost/ReservationSystem/');

$(document).ready(function () {




   // ---------------------------sidebar and search toggle---------------




   // $('#sidebar').fadeOut(10);
   // function removeAllSidebarToggleClass() {


   //    $('#sidebar-toggle-hide').removeClass('d-inline');;
   //    $('#sidebar-toggle-hide').removeClass('d-md-none');
   //    $('#sidebar-toggle-show').removeClass(' d-md-inline');
   //    $('#sidebar-toggle-show').removeClass('d-none');

   // }

   // $('#sidebar-toggle-show').click(function () {
   //    $('#sidebar').fadeIn(300);
   //    $('#main-body').animate({ width: "100%-14rem" }, 300);
   //    setTimeout(function () {
   //       removeAllSidebarToggleClass();
   //       $('#sidebar-toggle-hide').removeClass('d-none');
   //       $('#sidebar-toggle-show').addClass('d-none');;
   //    }, 300);
   //    $('#sidebar-toggle-hide').click(function () {
   //       $('#sidebar').fadeOut(300);
   //       // $('#main-body').animate({ width: "100%" }, 300);
   //       setTimeout(function () {
   //          removeAllSidebarToggleClass();
   //          $('#sidebar-toggle-hide').addClass('d-none');
   //          $('#sidebar-toggle-show').removeClass('d-none');;
   //       });
   //    });
   // });

   // $('#menu-toggle').click(function () {
   //    $('#body-header').toggle(300);
   // });

   // $('#search-toggle').click(function () {
   //    $('#search-toggle').removeClass('d-md-inline');
   //    $('#search-area').addClass('d-md-inline');
   //    $('#search-input').animate({ width: "12rem" }, 300);
   // });

   // $('#search-area-hide').click(function () {
   //    $('#search-input').animate({ width: "0" }, 300);

   //    setTimeout(function () {
   //       $('#search-area').removeClass('d-md-inline');
   //       $('#search-toggle').addClass('d-md-inline');

   //    }, 300);
   // });
   // $('#header-notification-toggle').click(function () {
   //    $('#header-notification').fadeToggle();
   // });

   // $('#header-comment-toggle').click(function () {

   //    $('#header-comment').fadeToggle();

   // });



   ///---------------------------fadetoggle for header-profile-------------------///////

   $('#header-profile-toggle').click(function () {
      $('#header-profile').fadeToggle();

      $(document).click(function (event) {
         if (!$(event.target).closest('#header-profile, #header-profile-toggle').length) {
            $('#header-profile').fadeOut();
         }
      });
   });








   // 
   $('.sidebar-group-link').click(function () {
      $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
      $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left');
      var submenu = $(this).children('.sidebar-dropdown');
      $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-left');
      $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-down');
      var isSubMenuOpen = submenu.is(':visible');
      $('.sidebar-group-link').children('.sidebar-dropdown').slideUp();

      if (!isSubMenuOpen) {
         submenu.slideDown();
      }
   });





   // ---------------------------End sidebar and search toggle---------------




   //-----------------------------Full Screen Page------------------------------ //


   // $('#full-screen').click(function () {
   //    toggleFullScreen();
   // });
   // $('#sidebar-toggle-hide').click(function () {
   //    $('#sidebar').fadeOut(300);
   //    // $('.main-body-face-correction').animate({ width: "100%" }, 300);
   //    setTimeout(function () {
   //       removeAllSidebarToggleClass();
   //       $('#sidebar-toggle-hide').addClass('d-none');
   //       $('#sidebar-toggle-show').removeClass('d-none');;
   //    });
   // });
   // $('#sidebar-toggle-show').click(function () {
   //    $('#sidebar').fadeIn(300);
   //    $('.main-body-face-correction').animate({ width: "100%-10rem" }, 300);
   //    setTimeout(function () {
   //       removeAllSidebarToggleClass();
   //       $('#sidebar-toggle-hide').removeClass('d-none');
   //       $('#sidebar-toggle-show').addClass('d-none');;
   //    }, 300);
   // });





   function toggleFullScreen() {
      if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
         if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
         }
         else if (document.documentElement.mozRequestFullscreen) {
            document.documentElement.mozRequestFullscreen();
         }
         else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
         }
         $('#screen-compress').removeClass('.d-none');
         $('#screen-expand').addClass('.d-none');
      }
      else {
         if (document.cancelFullScreen) {
            document.cancelFullScreen();
         }
         else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
         }
         else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
         }
         $('#screen-compress').addClass('.d-none');
         $('#screen-expand').removeClass('.d-none');
      }
   }

   //----------------------------End FullScreen----------------------//


   //-----------------------button login or register  disable and enable in the primary page--------------------- //

   var beforelogin = document.getElementById("before-login");
   if (beforelogin !== null && beforelogin.className === "before-login") {
      $('#btn-next-to-pay').css('color', 'rgba(0,0,0,.12)');
      // rgba(0,0,0,.12)

      // event.stopPropagation();
   } else {
      // dropdown7.slideToggle();
      $('#btn-next-to-pay').css('opacity', '100%');

   }

   //-----------------------   End button login or register  disable and enable in the primary page--------------------- //





   //-------------------------------------Open the first dropdown for user guidance---------------------------//
   $(document).ready(function () {
      $('.primary-dropdown').find('.dropdown-body').slideDown();
   });


   var total = '';
   var dateValue = '';
   var user_id = 0;

   //--------------------prevent allowing drop-downs to open when previous drop-downs are open-----------//
   var res_barber = '';
   var res_date = '';
   var res_add = '';
   var res_time = '';
   var res_info_user = '';
   var flag_empty_add = false;
   var beforelogin = '';
   var res_style = '';
   const header1 = $('#header1');
   const header2 = $('#header2');
   const header3 = $('#header3');
   const header4 = $('#header4');
   const header5 = $('#header5');
   const header6 = $('#header6');
   const header7 = $('#header7');
   const header8 = $('#header8');
   const dropdown1 = $('#dropdown1');
   const dropdown2 = $('#dropdown2');
   const dropdown3 = $('#dropdown3');
   const dropdown4 = $('#dropdown4');
   const dropdown5 = $('#dropdown5');
   const dropdown6 = $('#dropdown6');
   const dropdown7 = $('#dropdown7');

   res_barber = $('#res-barber');
   res_date = $('#res-date');
   res_time = $('#res-time');
   // res_end_time = $('#res-end-time');
   res_add = $('#res-additional');
   res_info_user = $('#res_info_user');
   res_style = $('#res-style');
   var flag_style = $('#flag-container').data('flag-style');
   console.log('Flag style:', flag_style);

   if (res_barber.text() === '') {
      $('#title-dropdown-date').css('opacity', '0.6');
      $('#title-dropdown-style').css('opacity', '0.6');
   }
   if (res_date.text() === '') {
      $('#title-dropdown-clock').css('opacity', '0.6');
   }
   if (res_time.text() === '') {
      $('#title-dropdown-add').css('opacity', '0.6');
   }

   if (res_add.text() === '') {
      $('#title-dropdown-infouser').css('opacity', '0.6');
   }
   if (res_info_user.text() === '') {
      $('#title-dropdown-check').css('opacity', '0.6');
   }



   header1.on('click', function () {
      dropdown1.slideToggle();
   });

   header2.on('click', function (event) {
      if (res_barber.text() === '') {
         event.stopPropagation();
      } else {
         dropdown2.slideToggle();
      }
   });
   header3.on('click', function (event) {

      if (flag_style == true) {
         if (res_style.text() === '') {
            event.stopPropagation();
         } else {
            dropdown3.slideToggle();
         }
      }
      else {
         if (res_barber.text() === '') {
            event.stopPropagation();
         } else {
            dropdown3.slideToggle();
         }
      }


   });

   header4.on('click', function (event) {
      if (res_date.text() === '') {
         event.stopPropagation();
      } else {
         dropdown4.slideToggle();
      }
   });

   header5.on('click', function (event) {
      if (res_time.text() === '') {
         event.stopPropagation();
      } else {
         dropdown5.slideToggle();
      }
   });


   header6.on('click', function (event) {
      if (res_add.text() === '' && flag_empty_add == false) {
         event.stopPropagation();
      } else {
         dropdown6.slideToggle();

      }
   });


   header7.on('click', function (event) {
      beforelogin = document.getElementById("before-login");
      if (beforelogin.className === "before-login") {
         event.stopPropagation();
      } else {
         dropdown7.slideToggle();
      }
   })









   $('#btn-next-to-pay').on('click', function () {
      beforelogin = document.getElementById("before-login");
      if (beforelogin.className !== "before-login") {
         $(this).closest('.dropdown-group-link').find('.dropdown-body').slideUp();
         var $nextDropdown = $(this).closest('.dropdown-group-link').next('.dropdown-group-link');
         $nextDropdown.find('.dropdown-body').slideDown();
      }
      var addtional_price = document.getElementById('addtional_price');

      if (add_price == 0) {
         addtional_price.innerHTML = 0 + '  تومان';
      }

      var service_price = document.getElementById('service-price');
      var total_price = document.getElementById('total-price');
      var style_price = Number(sessionStorage.getItem("style_price"));

      if (style_price > 0) {
         if (service_price) {
            var style_price_v = commafy(style_price);
            service_price.innerHTML = style_price_v + '  تومان';
         }
         // if (add_price > 0) {
         total = Number(style_price) + Number(add_price);
         addtional_price.innerHTML = add_price + '  تومان';
         // }
         // else {
         // total = style_price
         // }
         if (total_price) {
            total_v = commafy(total);
            total_price.innerHTML = total_v + '  تومان';
         }

      } else {
         if (service_price) {
            var person_price_v = commafy(person_price);
            service_price.innerHTML = person_price_v + '  تومان';
         }
         if (add_price > 0) {
            total = Number(person_price) + Number(add_price);
            addtional_price.innerHTML = commafy(add_price) + '  تومان';
         }
         else {
            total = person_price
         }
         if (total_price) {
            var total_v = commafy(total);
            total_price.innerHTML = total_v + '  تومان';

         }
      }



   })



   //-------------------- End prevent allowing drop-downs to open when previous drop-downs are open-----------//











   //-------------------- EVENT CLICK FOR BTNS IN THE PRIMARY PAGE RESERVE-----------//

   var add_price = 0;
   var person_price = 0;
   var dateValue = '';
   var personnelId = '';
   var serviceId = '';
   var busi_id = '';
   $('#btn-business').on('click', function () {
      sessionStorage.setItem("busi_id", '');

      busi_id = $(this).attr('data-busi-id');
      // alert(busi_id);
      sessionStorage.setItem("busi_id", busi_id);

   })

   // var style_price = 0;
   $('.btn-select-barber').on('click', function () {
      $(this).closest('.dropdown-group-link').find('.dropdown-body').slideUp();
      var nextDropdown = $(this).closest('.dropdown-group-link').next('.dropdown-group-link');
      nextDropdown.find('.dropdown-body').slideDown();
      personnelId = $(this).attr('data-personnel-id');
      serviceId = $(this).attr('data-service-id');
      var styleId = $(this).attr('data-style-id');
      // alert(serviceId);
      // alert(personnelId);

      // alert(busi_id);

      $.ajax({
         type: "POST",
         url: url("categories/getbarber.php"),
         data: {
            personnelId: personnelId
         },
         success: function (response) {
            console.log(response);
            $('.res-barber').html(response);

            if (flag_style == true) {
               $('#title-dropdown-style').css('opacity', '100%');

            }
            else {
               $('#title-dropdown-date').css('opacity', '100%');

            }

         },
         error: function (xhr, status, error) {
            console.error(error);
         }
      });

      $.ajax({
         type: "POST",
         url: url("categories/getstyle.php"),
         data: {
            personnelId: personnelId
         },
         success: function (response) {
            $('.section-style').html(response);
            // console.log(response);
         },
         error: function (xhr, status, error) {
            console.error(error);
         }
      });
      $.ajax({
         url: url("functions/update_session.php"),
         type: 'POST',
         data: { personnel_id: personnelId, service_id: serviceId },
         success: function (response) {
            // alert(response);
            person_price = (response);

            // person_price = number_format($person_price);


         },
         error: function (xhr, status, error) {
            console.error('AJAX error:', error);
         }
      });







   });


   function convertPersianToEnglish(input) {
      const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

      let output = input;

      for (let i = 0; i < persianNumbers.length; i++) {
         let regex = new RegExp(persianNumbers[i], 'g');
         output = output.replace(regex, englishNumbers[i]);
      }

      return output;
   }

   //   let persianDate = "۱۴۰۳/۰۶/۳۰";
   //   let englishDate = convertPersianToEnglish(persianDate);
   //   console.log(englishDate);  



   $('#btn-next').on('click', function () {
      var regex = /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/;
      dateValue = document.getElementById("exampleInput1").value;
      var finglishdate = convertPersianToEnglish(dateValue);

      if (regex.test(finglishdate)) {
         // alert("تاریخ معتبر است.");

         // if (dateValue != "") {
         $(this).closest('.dropdown-group-link').find('.dropdown-body').slideUp();
         var $nextDropdown = $(this).closest('.dropdown-group-link').next('.dropdown-group-link');
         $('#title-dropdown-clock').css('opacity', '100%');
         $nextDropdown.find('.dropdown-body').slideDown();
         $.ajax({
            method: 'GET',
            url: url("categories/gettime.php"),
            data: { dateValue: dateValue, serviceId: serviceId, personnelId: personnelId, busi_id: sessionStorage.getItem("busi_id") },
            success: function (response) {
               $('.afternoon').html(response);
               $('.res-date').html(dateValue);
            }
         });
         $.ajax({
            method: 'GET',
            url: url("categories/gettime2.php"),
            data: { dateValue: dateValue, serviceId: serviceId, personnelId: personnelId, busi_id: sessionStorage.getItem("busi_id") },
            success: function (response) {
               $('.noonafter').html(response);
               $('.res-date').html(dateValue);
            }
         });
         $.ajax({
            method: 'GET',
            url: url("categories/endgettime2.php"),
            data: { dateValue: dateValue, serviceId: serviceId, personnelId: personnelId, busi_id: sessionStorage.getItem("busi_id") },
            success: function (response) {
               $('.end-noonafter').html(response);
               $('.res-date').html(dateValue);
            }
         });
         $.ajax({
            method: 'GET',
            url: url("categories/endgettime.php"),
            data: { dateValue: dateValue, serviceId: serviceId, personnelId: personnelId, busi_id: sessionStorage.getItem("busi_id") },
            success: function (response) {
               $('.end-afternoon').html(response);
               $('.res-date').html(dateValue);
            }
         });

      }
      else {
         alert("تاریخ نامعتبر است.");
      }



      // $.ajax({
      //    url: '/reservationsystem/categories/services.php',
      //    type: 'POST',
      //    data: { serviceId: serviceId, personnelId: personnelId, busi_id: sessionStorage.getItem("busi_id") },
      //    success: function (response) {
      //       // alert(busi_id);
      //       // alert(response);
      //    }

      // })

   });

   $('#btn-next-add').on('click', function () {
      flag_empty_add = true;
      $(this).closest('.dropdown-group-link').find('.dropdown-body').slideUp();
      var $nextDropdown = $(this).closest('.dropdown-group-link').next('.dropdown-group-link');
      add_price = 0;
      $('.res-additional').html('');

      $nextDropdown.find('.dropdown-body').slideDown();
      $('input[type="checkbox"]:checked').each(function () {
         var additional_id = $(this).data('additional');
         var serviceId = $(this).data('service-id');

         // console.log('Additional ID:', additionalId);
         // console.log('Service ID:', serviceId);
         $.ajax({
            type: 'POST',
            url: url("categories/services.php"),
            data: { additional_id: additional_id },
            success: function (response) {
               if (response != '') {
                  $('.res-additional').html(response + $('.res-additional').text());
                  $('#title-dropdown-infouser').css('opacity', '100%');

                  selected1 = response;

                  $.ajax({
                     url: url("functions/update_session.php"),
                     type: 'POST',
                     data: { additional_id: additional_id, service_id: serviceId },
                     success: function (response) {
                        // alert(response);
                        add_price += Number(response);

                     },
                     error: function (xhr, status, error) {
                        console.error('AJAX error:', error);
                     }
                  });
               }
            }
         });

      });
   });


   // var additional_id = $('data-additional');
   // var serviceId = $('data-service-id');


   // var val = additional_id.attr('data-additional');

   // $('#btn-next-add').on('click', function () {
   //    $(this).closest('.dropdown-group-link').find('.dropdown-body').slideUp();
   //    var $nextDropdown = $(this).closest('.dropdown-group-link').next('.dropdown-group-link');
   //    $nextDropdown.find('.dropdown-body').slideDown();
   //    var selected2 = '';



   //    $('input[type="checkbox"]').on(':checked', function () {
   //       var additionalId = $(this).data('additional');
   //       var serviceId = $(this).data('service-id');

   //       // console.log('Additional ID:', additionalId);
   //       // console.log('Service ID:', serviceId);

   //       alert(additionalId);
   //       alert(serviceId);







   //       // ادامه کدهای شما برای استفاده از additionalId و serviceId
   //    });




   //    if ($('#check_additional3').is(':checked')) {
   //       // alert('ok');
   //       // کدهایی که باید در صورت checked بودن چک‌باکس اجرا شوند



   //    } else {
   //       // کدهایی که باید در صورت unchecked بودن چک‌باکس اجرا شوند
   //       $('.res-additional').html(selected2);
   //       add_price = 0;
   //    }
   // });












   // var busi_id = '';









   var currentuser;
   var input_number_phone = '';
   var OTP = '';
   function generateOTP() {
      var digits = '0123456789';


      for (var i = 0; i < 5; i++) {
         OTP += digits[Math.floor(Math.random() * 10)];
      }

      return OTP;
   }

   let timerOn = false;
   let timerId = '';
   function timer(remaining) {
      var m = Math.floor(remaining / 60);
      var s = remaining % 60;

      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;



      var timer_inline = document.getElementById("timer");
      timer_inline ? timer_inline.innerHTML = m + ':' + s : null;
      document.getElementById('timer-pop').innerHTML = m + ':' + s;
      var timer_pop = document.getElementById('timer-pop');
      timer_pop ? timer_pop.innerHTML = m + ':' + s : null;
      var timer_change_pass_pop = document.getElementById('timer-change-pass-pop');
      timer_change_pass_pop ? timer_change_pass_pop.innerHTML = m + ':' + s : null;
      var timer_change_pass = document.getElementById('timer-change-pass');
      timer_change_pass ? timer_change_pass.innerHTML = m + ':' + s : null;



      remaining -= 1;

      if (remaining >= 0 && timerOn) {
         timerId = setTimeout(function () {
            timer(remaining);
         }, 1000);
         return;
      }

      if (!timerOn) {
         // Do validate stuff here
         return;
      }

      // Do timeout stuff here
      $('.timer').addClass('d-none');
      $('.timer-change-pass').addClass('d-none');
      $('.send-again-code-pass').removeClass('d-none');
      $('.send-again-code').removeClass('d-none');
      OTP = '';



   }


   $('.submit-tel').on('click', function () {
      $('.error-invalid-password').addClass('d-none');
      $('.enter-password').removeClass('d-none');
      var inputElement = document.getElementById("phone-user");
      input_number_phone = inputElement ? inputElement.value : null;

      if (input_number_phone == '' || input_number_phone == null) {
         input_number_phone = document.getElementById("phone").value;
      }

      $.ajax({
         url: url('categories/services.php'),
         method: 'POST',
         data: { phone: input_number_phone },
         success: function (response) {
            // alert(response);x
            if (response.trim() == 'false') {

               var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
               var result = regex.test(input_number_phone);

               // alert(result);
               if (result == true) {



                  // if (response.trim() == "" || response.trim() == "true") {
                  $('.container-user-info').addClass('d-none');
                  $('.container-activation-code').removeClass('d-none');
                  $('.enter-phone').removeClass('d-none');
                  $('.error-invalid-phone').addClass('d-none');
                  $('.timer').removeClass('d-none');
                  $('.send-again-code').addClass('d-none');
                  if (!timerOn) {
                     timerOn = true;
                     timer(180);

                     OTP = '';
                     OTP = generateOTP();
                     // alert(OTP);
                     $.ajax({
                        url: url('categories/services.php'),
                        method: 'POST',
                        data: { OTP: OTP, input_number_phone: input_number_phone },
                        success: function (response) {
                           console.log(response);
                           // alert(response);

                        }
                     })


                  }


                  // }
               }

               else {
                  $('.enter-phone').addClass('d-none');
                  $('.error-invalid-phone').removeClass('d-none');

               }

               // });

            }
            else {
               // alert('user is registered');
               $('.container-user-info').addClass('d-none');
               $('.user-login').removeClass('d-none');
            }

         }
      });

   });

   $('.confirm-code').on('click', function () {
      var confirm_code = document.getElementById("otp-code");
      var confirm_code = confirm_code ? confirm_code.value : null;
      // alert(confirm_code);
      // var confirm_code = document.getElementById('otp-code').value;
      if (confirm_code == '' || confirm_code == null) {
         var confirm_code = document.getElementById('code-otp').value;
      }
      if (OTP == confirm_code && !OTP == '') {
         $('.container-form-info-user').removeClass('d-none');
         $('.container-activation-code').addClass('d-none');
      } else {
         $('.lable-err-code').removeClass('d-none');
         $('.lable-enter-code').addClass('d-none');
      }
   });

   $('.change-phone-number').on('click', changePhoneNumber);

   function changePhoneNumber() {
      $('.container-user-info').removeClass('d-none');
      $('.container-activation-code').addClass('d-none');
      $('.forget-password').addClass('d-none');
      $('.lable-err-code').addClass('d-none');
      $('.lable-enter-code').removeClass('d-none');
      timerOn = false;
      clearTimeout(timerId);
   }
   $('.send-again-code').on('click', function () {
      $('.send-again-code').addClass('d-none');
      $('.timer').removeClass('d-none');
      timerOn = false;
      if (!timerOn) {
         timerOn = true;
         timer(180);
      }
      OTP = '';
      OTP = generateOTP();
      // alert(OTP);
      $.ajax({

         url: url('categories/services.php'),
         method: 'POST',
         data: { OTP: OTP, input_number_phone: input_number_phone },
         success: function (response) {


            console.log(response);
            // alert(response);



         }





      })
   })


   $('.register-user').on('click', function () {
      var name_user = document.getElementById("name-user");
      var name_user = name_user ? name_user.value : null;
      var last_name_user = document.getElementById('last-name-user');
      var last_name_user = last_name_user ? last_name_user.value : null;
      var password_user = document.getElementById('password-user');
      var password_user = password_user ? password_user.value : null;



      if (name_user == '' || name_user == null && last_name_user == '' || last_name_user == null && password_user == '' || password_user == null) {
         var name_user = document.getElementById('user-name').value;
         var last_name_user = document.getElementById('user-last-name').value;
         var password_user = document.getElementById('user-password').value;
      }


      if (name_user && last_name_user && password_user) {
         $(this).closest('.dropdown-group-link').find('.dropdown-body').slideUp();
         var nextDropdown = $(this).closest('.dropdown-group-link').next('.dropdown-group-link');
         nextDropdown.find('.dropdown-body').slideDown();

         $.ajax({
            url: url('categories/services.php'),
            method: 'POST',
            data: { name_user: name_user, last_name_user: last_name_user, password_user: password_user },
            success: function (response) {
               // alert(response);
               currentuser = response;
               $('.user-info').html(response);
               $('.before-login').addClass('d-none');
               $('.after-login').removeClass('d-none');
               $('.header-username').html(currentuser);
               $('.res-info-user').html(currentuser);
               $('#title-dropdown-check').css('opacity', '100%');
               $('#btn-next-to-pay').css('background-color', '#80003E');
               $('#btn-next-to-pay').css('color', '#ffff');

            }
         })
         $('.User-is-logged').removeClass('d-none');
         $('.container-form-info-user').addClass('d-none');
         var addtional_price = document.getElementById('addtional_price');

         if (add_price == 0) {
            addtional_price.innerHTML = 0 + '  تومان';
         }

         var service_price = document.getElementById('service-price');
         var total_price = document.getElementById('total-price');
         var style_price = Number(sessionStorage.getItem("style_price"));

         if (style_price > 0) {
            if (service_price) {
               var style_price_v = commafy(style_price);
               service_price.innerHTML = style_price_v + '  تومان';
            }
            // if (add_price > 0) {
            var total = Number(style_price) + Number(add_price);
            addtional_price.innerHTML = add_price + '  تومان';
            // }
            // else {
            // total = style_price
            // }
            if (total_price) {
               var total_v = commafy(total);
               total_price.innerHTML = total_v + '  تومان';
            }

         } else {
            if (service_price) {
               var person_price_v = commafy(person_price);
               service_price.innerHTML = person_price_v + '  تومان';
            }
            if (add_price > 0) {
               var total = Number(person_price) + Number(add_price);
               addtional_price.innerHTML = commafy(add_price) + '  تومان';
            }
            else {
               total = person_price
            }
            if (total_price) {
               var total_v = commafy(total);
               total_price.innerHTML = total_v + '  تومان';

            }
         }


         // $.ajax({
         //    url: '/reservationsystem/functions/calc-order-price.php',
         //    method: 'POST',
         //    success: function (response) {

         //    }
         // })




      }
      var fetch_user_id = '1';
      $.ajax({
         method: 'POST',
         url: url('categories/services.php'),
         data: { fetch_user_id: fetch_user_id },
         success: function (response) {
            user_id = Number(response);
            // alert(user_id);
            // alert(sessionStorage.getItem("user_id"));
            if (sessionStorage.getItem("user_id") == 0 || sessionStorage.getItem("user_id") == null) {
               document.getElementById('profile-link').href = 'http://localhost/ReservationSystem/panel-customer?order_user=' + Number(response);
               sessionStorage.setItem("user_id", user_id);
            }
            else {

            }

         }



      })



   })



   $('.btn-exit').on('click', function () {
      $('.enter-phone').removeClass('d-none');
      $('.error-invalid-phone').addClass('d-none');

      $.ajax({
         url: url('categories/exit.php'),
         method: 'POST',
         success: function (response) {
            if (response.trim() == "ok") {
               $.ajax({
                  url: url('categories/check.php'),
                  method: 'POST',
                  success: function (response) {
                     // $('.check-login').html(response);
                     // alert(response);

                     eval(response);
                     timerOn = false;
                     clearTimeout(timerId);
                     sessionStorage.setItem("user_id", 0);
                     // location.reload();



                  }
               })
            }


         }
      })






   })







   $('.btn-login').on('click', function () {


      var password = document.getElementById('password-login');
      var password = password ? password.value : null;


      if (password == '' || password == null) {
         var password = document.getElementById('login-password').value;
      }

      $.ajax({
         url: url('categories/services.php'),
         method: 'POST',
         data: ({ password: password }),
         success: function (response) {
            if (response.trim() == 'false') {
               // $('.user-info').html(response);
               $('.error-invalid-password').removeClass('d-none');
               $('.enter-password').addClass('d-none');
            }
            else {



               $.ajax({
                  url: url('categories/check.php'),
                  method: 'POST',
                  success: function (response) {


                     eval(response);



                  }
               })



            }

         }





      })
   })



   $('.btn-forget-password').on('click', function () {

      $('.timer-change-pass').removeClass('d-none');
      // $('.timer-change-pass-pop').removeClass('d-none');
      $('.send-again-code-pass').addClass('d-none');
      timerOn = false;

      if (!timerOn) {

         // alert('test');
         timerOn = true;
         timer(180);
         var OTP = '';
         OTP = generateOTP();
         // alert(OTP);
         $('.user-login').addClass('d-none');
         $('.forget-password').removeClass('d-none');
         $.ajax({
            url: url('categories/services.php'),
            method: 'POST',
            data: { FORGET_OTP: OTP, input_number_phone: input_number_phone },
            success: function (response) {
               console.log(response);
               // alert(response);
            }
         })


      }
      else {
         alert('fail');
      }



   })





   $('.send-again-code-pass').on('click', function () {
      $('.send-again-code-pass').addClass('d-none');
      $('.timer-change-pass').removeClass('d-none');
      timerOn = false;
      if (!timerOn) {
         timerOn = true;
         timer(180);
      }
      OTP = '';
      OTP = generateOTP();
      // alert(OTP);
      $.ajax({

         url: url('categories/services.php'),
         method: 'POST',
         data: { OTP: OTP, input_number_phone: input_number_phone },

         success: function (response) {


            console.log(response);


         }





      })
   })




   $('.change-password').on('click', function () {
      var confirm_code = document.getElementById('otp-code-change');
      var confirm_code = confirm_code ? confirm_code.value : null;
      var newpassword = document.getElementById('newpassword');
      var newpassword = newpassword ? newpassword.value : null;





      if (confirm_code == '' || confirm_code == null && newpassword == '' || confirm_code == null) {
         newpassword = document.getElementById('passwordnew').value;
         confirm_code = document.getElementById('change-otp-code').value;
      }


      // alert(OTP);
      if (OTP == confirm_code && !OTP == '') {

         if (!newpassword == '') {


            $.ajax({
               url: url('categories/services.php'),
               method: 'POST',
               data: { newpassword: newpassword },
               success: function (response) {
                  // alert(response);
                  timerOn = false;
                  clearTimeout(timerId);
               }




            })

            $('.user-login').removeClass('d-none');
            $('.forget-password').addClass('d-none');

         }


      } else {
         $('.lable-err-code').removeClass('d-none');
         $('.lable-enter-code').addClass('d-none');
      }

   })





   $.ajax({
      url: url('categories/check.php'),
      method: 'POST',
      success: function (response) {
         // $('.check-login').html(response);
         // alert(response);

         eval(response);



      },
      error: function (xhr, ajaxOptions, thrownError) {
         if (xhr.status == 404) {
            alert(thrownError);
         }
      }
   })





   //--------------function for add commos to group evrey three digits-------------//


   function commafy(num) {
      var str = num.toString().split('.');
      if (str[0].length >= 5) {
         str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
      }
      if (str[1] && str[1].length >= 5) {
         str[1] = str[1].replace(/(\d{3})/g, '$1 ');
      }
      return str.join('.');
   }






   //-------------------- END EVENT CLICK FOR BTNS IN THE PRIMARY PAGE RESERVE-----------//




   $('.btn-login').on('click', function () {
      var addtional_price = document.getElementById('addtional_price');
      if (addtional_price) {
         if (add_price == 0 || add_price == null) {
            addtional_price.innerHTML = 0 + '  تومان';
         }
      }


      var service_price = document.getElementById('service-price');
      var total_price = document.getElementById('total-price');
      var style_price = Number(sessionStorage.getItem("style_price"));

      if (style_price > 0) {
         if (service_price) {
            var style_price_v = commafy(style_price);
            service_price.innerHTML = style_price_v + '  تومان';
            // alert(style_price);
         }
         // if (add_price > 0) {
         total = Number(style_price) + Number(add_price);
         addtional_price.innerHTML = add_price + '  تومان';
         // }
         // else {
         // total = style_price
         // }
         if (total_price) {
            var total_v = commafy(total);
            total_price.innerHTML = total_v + '  تومان';
         }

      } else {
         if (service_price) {
            var person_price_v = commafy(person_price);
            service_price.innerHTML = person_price_v + '  تومان';
         }
         if (add_price > 0) {
            total = Number(person_price) + Number(add_price);
            addtional_price.innerHTML = commafy(add_price) + '  تومان';
         }
         else {
            total = person_price
         }
         if (total_price) {
            var total_v = commafy(total);
            total_price.innerHTML = total_v + '  تومان';

         }
      }
      // var fetch_user_id = '1';
      // $.ajax({
      //    method: 'POST',
      //    url: url('categories/services.php'),
      //    data: { fetch_user_id: fetch_user_id },
      //    success: function (response) {
      //       user_id = Number(response);
      //       // alert(user_id);
      //       // alert(sessionStorage.getItem("user_id"));
      //       if (sessionStorage.getItem("user_id") == 0 || sessionStorage.getItem("user_id") == null) {
      //          document.getElementById('profile-link').href = 'http://localhost/ReservationSystem/panel-customer?order_user=' + Number(response);
      //          sessionStorage.setItem("user_id", user_id);
      //       }
      //       else {

      //       }






      //       // $.ajax({
      //       //    method: 'GET',
      //       //    url: '/reservationsystem/layout/header2.php?user_id=' + encodeURIComponent(user_id),
      //       //    // data: { user_id: user_id },
      //       //    success: function (response) {
      //       //       alert(response);

      //       // function setCookie(name, value, days,path) {
      //       //    var expires = "";
      //       //    if (days) {
      //       //       var date = new Date();
      //       //       date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      //       //       expires = "; expires=" + date.toUTCString();
      //       //    }
      //       //    document.cookie = name + "=" + (value || "") + expires + "; path=" + path;
      //       // }


      //       // setCookie("user_id", user_id, 1,"reservationsystem/layout/header2.php"); 




      //    }



      // })

   });



   var random_order_number = '';

   function generate_order_number() {
      var digits = '0123456789';
      random_order_number = '';


      for (var i = 0; i < 5; i++) {
         random_order_number += digits[Math.floor(Math.random() * 10)];
      }

      return random_order_number;
   }

   // var user_id = 0;




   $('.confirm-btn-online').on('click', function () {

      // sessionStorage.setItem("user_id", '');
      sessionStorage.setItem("personnelId", '');
      sessionStorage.setItem("serviceId", '');
      sessionStorage.setItem("random_order_number", '');
      // sessionStorage.setItem("time", '');
      // sessionStorage.setItem("timeEnd", '');
      sessionStorage.setItem("total", '');


      var random_order_number = generate_order_number();

      var time = sessionStorage.getItem("time");
      var timeEnd = sessionStorage.getItem("time_end");


      var fetch_user_id = '1';
      $.ajax({

         method: 'POST',
         url: url('categories/services.php'),
         data: { fetch_user_id: fetch_user_id },
         success: function (response) {
            user_id = Number(response);
            // sessionStorage.setItem("user_id", user_id);
            sessionStorage.setItem("personnelId", personnelId);
            sessionStorage.setItem("serviceId", serviceId);
            sessionStorage.setItem("random_order_number", random_order_number);
            sessionStorage.setItem("total", total);
            $.ajax({
               method: 'POST',
               url: url('functions/update_session.php'),
               data: { user_id: user_id, personnelId, personnelId, serviceId: serviceId, random_order_number: random_order_number, time: time, timeEnd: timeEnd, total: total },
               success: function (response) {
                  console.log(response);
               }
            })


         }
      })
   })


   $('.confirm-btn-offline').on('click', function () {

      // alert(personnelId);
   });






   let button_cancel = document.querySelector(".button-cancel");
   if (button_cancel !== '' && button_cancel !== null) {
      button_cancel.addEventListener('click', function () {
         var order_number = $(this).attr('order-number');

         Swal.fire({
            title: 'مطمعن هستی؟',
            icon: 'warning',
            confirmButtonText: 'آره لغوش کن',
            showCancelButton: true,
            cancelButtonText: 'نه اشتباه شد'
         }).then((result) => {
            if (result.isConfirmed) {
               $.ajax({
                  method: 'GET',
                  data: { order_number: order_number },
                  url: url('panel-customer/delete.php'),
                  success: function (response) {
                     if (response == 'ok') {
                        Swal.fire({
                           title: 'انجام شد',
                           icon: 'success'
                        }).then(() => {
                           location.reload();
                        });
                     }
                  }
               });
            }
         });
      });
   }




   $('.container-flexible').on('click', function () {
      const section = $(this).next('.cancel-reserve-section');


      if (section.hasClass('d-none')) {
         section.removeClass('d-none').hide();


      }

      section.slideToggle();
   });

   // $('#button-login').on('click', function () {

   //    phone_number = document.getElementById("phone").value;
   //    password_number = document.getElementById("password").value;
   //    $.ajax({
   //       method: 'POST',
   //       url: '/reservationsystem/functions/ajax.php',
   //       data: { phone_number: phone_number, password_number: password_number },
   //       success: function (response) {

   //          if (response.trim() == 'false') {
   //             $('.error-invalid-password').removeClass('d-none');
   //             $('.enter-password').addClass('d-none');
   //          }
   //          else {
   //             $.ajax({
   //                method: 'POST',
   //                url: '/reservationsystem/categories/check.php',
   //                success: function (response) {
   //                   eval(response);
   //                   alert('ok');
   //                }
   //             })
   //          }
   //       }


   //    })


   // })











});






function showMenu() {
   var menu = document.getElementById("menu");
   if (menu.className === "header-menu") {
      menu.className += " show";
      $('.button-rl').addClass('d-none');


   } else {
      menu.className = "header-menu";
      $('.button-rl').removeClass('d-none');


   }

}
// ----------------------------------------END EVENT SHOW-OR-HIDE BTN LOGIN AND REGISTER -------------------------



//--------------FUNCTION FOR EXIT LOGIN -----------------//

function exit() {
   $('.enter-phone').removeClass('d-none');
   $('.error-invalid-phone').addClass('d-none');
   $.ajax({
      url: url('categories/exit.php'),
      method: 'POST',
      success: function (response) {
         if (response.trim() == "ok") {
            $.ajax({
               url: url('categories/check.php'),
               method: 'POST',
               success: function (response) {
                  // $('.check-login').html(response);
                  // alert(response);

                  eval(response);
                  sessionStorage.setItem("user_id", 0);
                  // location.reload();



               }
            })
         }


      }
   })






}


// document.documentElement('input-group-addon').addEventListener('input-group-addon', function (e) {
//    this.value = this.value.replace(/[^\d]/g, '');
// });




// ----------------------------------------EVENT SHOW-OR-HIDE BTN LOGIN AND REGISTER -------------------------


//-----------------------END FUNCTION------------------------------//









