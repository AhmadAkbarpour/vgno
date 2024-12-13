var selected1 = '';
$('#check_additional1').on('click', function () {
   // alert(add_price);
   selected1 = '';
   $(this).closest('.dropdown-group-link').find('.dropdown-body').slideUp();
   var $nextDropdown = $(this).closest('.dropdown-group-link').next('.dropdown-group-link');
   $nextDropdown.find('.dropdown-body').slideDown();
   if ($(this).prop('checked')) {
      var additional_id = $(this).attr('data-additional');
      var serviceId = $(this).attr('data-service-id');
      $.ajax({
         type: 'POST',
         url: 'services.php',
         data: { additional_id: additional_id },
         success: function (response) {
            if (response != '') {
               $('.res-additional').html(response + $('.res-additional').text());
               $('#title-dropdown-infouser').css('opacity', '100%');

               selected1 = response;

               $.ajax({
                  url: '/reservationsystem/functions/update_session.php',
                  type: 'POST',
                  data: { additional_id: additional_id, service_id: serviceId },
                  // dataType: 'json',
                  success: function (response) {
                     alert(response);
                     add_price += Number(response);
                  },
                  error: function (xhr, status, error) {
                     console.error('AJAX error:', error);
                  }
               });

            }
         }
      });
   }
   else {
      $('.res-additional').html(selected2);
      add_price = 0;

   }
});

var selected2 = '';
$('#check_additional2').on('click', function () {
   // alert(add_price);

   selected2 = '';
   $(this).closest('.dropdown-group-link').find('.dropdown-body').slideUp();
   var $nextDropdown = $(this).closest('.dropdown-group-link').next('.dropdown-group-link');
   $nextDropdown.find('.dropdown-body').slideDown();
   if ($(this).prop('checked')) {
      var additional_id = $(this).attr('data-additional');
      var serviceId = $(this).attr('data-service-id');
      // alert(additional_id);
      $.ajax({
         type: 'POST',
         url: 'services.php',
         data: { additional_id: additional_id },
         success: function (response) {
            if (response != '') {
               $('.res-additional').html(response + $('.res-additional').text());
               $('#title-dropdown-infouser').css('opacity', '100%');

               selected2 = response;

               $.ajax({
                  url: '/reservationsystem/functions/update_session.php',
                  type: 'POST',
                  data: { additional_id: additional_id, service_id: serviceId },
                  // dataType: 'json',
                  success: function (response) {
                     alert(response);
                     add_price += Number(response);
                  },
                  error: function (xhr, status, error) {
                     console.error('AJAX error:', error);
                  }
               });
            }
         }
      });
   }
   else {
      $('.res-additional').html(selected1);
      add_price = 0;

   }
});
var selected3 = '';
// alert(add_price);

$('#check_additional3').on('click', function () {
   selected3 = '';
   $(this).closest('.dropdown-group-link').find('.dropdown-body').slideUp();
   var $nextDropdown = $(this).closest('.dropdown-group-link').next('.dropdown-group-link');
   $nextDropdown.find('.dropdown-body').slideDown();
   if ($(this).prop('checked')) {
      var additional_id = $(this).attr('data-additional');
      var serviceId = $(this).attr('data-service-id');
      // alert(additional_id);
      $.ajax({
         type: 'POST',
         url: 'services.php',
         data: { additional_id: additional_id },
         success: function (response) {
            if (response != '') {
               $('.res-additional').html(response + $('.res-additional').text());
               $('#title-dropdown-infouser').css('opacity', '100%');

               selected3 = response;

               $.ajax({
                  url: '/reservationsystem/functions/update_session.php',
                  type: 'POST',
                  data: { additional_id: additional_id, service_id: serviceId },
                  // dataType: 'json',
                  success: function (response) {
                     alert(response);
                     add_price += Number(response);


                  },
                  error: function (xhr, status, error) {
                     console.error('AJAX error:', error);
                  }
               });
            }
         }
      });
   }
   else {
      $('.res-additional').html('');
      add_price = 0;

   }
});