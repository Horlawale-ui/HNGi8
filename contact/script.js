$(document).ready(function () {
  $('.ham-burger, .nav ul li a').click(function () {
    $('.nav').toggleClass('open');
    $('.ham-burger').toggleClass('active');
  });

  $('.accordian-container').click(function () {
    $('.accordian-container').children('.body').slideUp();
    $('.accordian-container').removeClass('active');
    $('.accordian-container')
      .children('.head')
      .children('i')
      .removeClass('fa-angle-down')
      .addClass('fa fa-angle-up');
    $(this).children('.body').slideDown();
    $(this).addClass('active');
    $(this)
      .children('.head')
      .children('i')
      .removeClass('fa-angle-up')
      .addClass('fa-angle-down');
  });

  $('.nav ul li a, .go-down').click(function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      let hash = this.hash;

      $('html,body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );

      //  add active class in navbar

      $('.nav ul li a').removeClass('active');
      $(this).addClass('active');
    }
  });
});
