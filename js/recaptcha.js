(function ($, window, Backdrop) {

  Backdrop.behaviors.recaptcha = {
    attach: function (context) {
      $('.g-recaptcha', context).each(function() {
        if (typeof grecaptcha === 'undefined') {
          return;
        }
        if ($(this).hasClass('recaptcha-processed')) {
          grecaptcha.reset();
        }
        else {
          grecaptcha.render(this, $(this).data());
          $(this).addClass('recaptcha-processed');
        }

      });
    }
  };

  window.backdropRecaptchaOnload = function() {
    $('.g-recaptcha').each(function() {
      grecaptcha.render(this, $(this).data());
      $(this).addClass('recaptcha-processed');
    });
  }
})(jQuery, window, Backdrop);
