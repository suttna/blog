$(function () {
  $('.js-subscribe').click(function (event) {
    event.preventDefault()

    $('html, body').animate({ scrollTop: $('.js-subscribe-form').offset().top }, 1000);
    $('.js-subscribe-form input[name="email"]').focus();
  });


  $('form')
    .on('submit', function (event) {
      event.preventDefault()

      const $form = $(this)
      const data = {}

      $form.serializeArray().forEach(function (ele) { data[ele.name] = ele.value; });

      $.ajax({
        type: 'POST',
        url: $form.prop('target'),
        data: JSON.stringify(data),
        contentType: 'application/json',
        dataType: 'json'
      })
        .done(function () {
          Alert.success('Yay, we got your email', "I'll send all the new cool features I'm planning to release soon :)");

          $form[0].reset();
        })
        .fail(function () {
          Alert.danger('Something went wrong', 'Please try again in a few minutes or contact us at support@suttna.com.');
        });
    });

  //
  //
  // Alerts

  $('body').on('click', '.c-alert__close', function (event) {
    $(event.target).parents('.c-alert').remove();
  })

  window.Alert = (function () {
    const markup = function (type, title, description) {
      var result = "";

      result += "<div class='c-alert c-alert--" + type + "'>";
      result +=   "<div class='c-alert__close'></div>";
      result +=   "<h4>" + title + "</h4>";
      result +=   "<p>" + description + "</p>";
      result += "</div>";

      return result;
    }

    const render = function (type, title, description) {
      const alert = $(markup(type, title, description)).appendTo('body');

      alert.delay(5000).fadeOut('slow', function () { alert.remove() });
    }

    return {
      danger: function (title, description) {
        render('danger', title, description);
      },

      success: function (title, description) {
        render('success', title, description);
      }
    }
  })();

});
