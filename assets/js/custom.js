
$('.faq-parent .content').click(function(){
    $(this).toggleClass('border-off-custom');
    // $(this).children('.fa-plus').toggleClass('fa-minus');
    $(this).children('span').children('.minus-icon').toggleClass('show-icons');
    $(this).children('span').children('.plus-icons').toggleClass('hide-icons');
});

$('.nav-button').click(function(){
    // $('.sec-navbar-top').toggleClass('top-hidden');
    $('.drop-nav-main').toggleClass('show');
});

$('.sub-menu-main').click(function(){
    $(this).parent('.dropdown-menu-main').children('.right-drop').toggleClass('showSubMenu');
});