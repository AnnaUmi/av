
$(window).on("load", function () {
    animateText("dynamic-text", "Hi, I am Anna Vlasenko, a front-end developer,  I am graduating with a Computer Science degree.  I create responsive websites of a high quality.", 0);

})
function animateText(id, text, i) {
    document.getElementById(id).innerHTML = text.substring(0, i);
    i++;

    setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
}
$(function () {
    var sticky_nav_offset = $('.header-fixed').offset().top;
    var sticky_nav = function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top > sticky_nav_offset) {
            $('.header-fixed').removeClass('menu');
            $('.header-fixed').addClass('fixed');
        } else {
            $('.header-fixed').removeClass('fixed');
            $('.header-fixed').addClass('menu');
        }
    };
    sticky_nav();

    $(window).scroll(function () {
        sticky_nav();
        console.log('scroll')
    })
});

/*mobil nav*/
$(document).ready(function () {
    $('#mobil-nav-toggle').on('click', function () {
        $(this).toggleClass('on');
        $('#mobil-nav').toggleClass('nodisplay');
    })
    $('.mobil-nav__list').on('click', function () {
        $('#mobil-nav-toggle').toggleClass('on');

        $('#mobil-nav').toggleClass('nodisplay');
    })
});

/*end mobil nav*/
$(function () {
    var form = $('#contact');
    var formMessages = $('.contact-form__aftermessage');

    $(form).submit(function (event) {
        event.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCB3aW5kb3cgKS5vbiggXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuXHRhbmltYXRlVGV4dChcImR5bmFtaWMtdGV4dFwiLCBcIkhpLCBJIGFtIEFubmEgVmxhc2Vua28sIGEgZnJvbnQtZW5kIGRldmVsb3BlciwgIEkgYW0gZ3JhZHVhdGluZyB3aXRoIGEgQ29tcHV0ZXIgU2NpZW5jZSBkZWdyZWUuICBJIGNyZWF0ZSByZXNwb25zaXZlIHdlYnNpdGVzIG9mIGEgaGlnaCBxdWFsaXR5LlwiLCAwKTtcbiBcbn0pXG5mdW5jdGlvbiBhbmltYXRlVGV4dChpZCwgdGV4dCwgaSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBpKTtcbiAgICBpICsrO1xuICAgIFxuICAgIHNldFRpbWVvdXQoXCJhbmltYXRlVGV4dCgnXCIgKyBpZCArIFwiJywnXCIgKyB0ZXh0ICsgXCInLFwiICsgaSArIFwiKVwiLCAxMDApO1xuICB9XG4kKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHN0aWNreV9uYXZfb2Zmc2V0ID0gJCgnI21lbnUnKS5vZmZzZXQoKS50b3A7XG4gICAgdmFyIHN0aWNreV9uYXYgPSBmdW5jdGlvbigpe1xuICAgIFx0dmFyIHNjcm9sbF90b3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgXHRpZihzY3JvbGxfdG9wID4gc3RpY2t5X25hdl9vZmZzZXQpe1xuICAgXHRcdCQoJyNtZW51JykucmVtb3ZlQ2xhc3MoJ21lbnUnKTtcbiAgICBcdFx0JCgnI21lbnUnKS5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICBcdH1lbHNle1xuICAgIFx0XHQkKCcjbWVudScpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIFx0XHQkKCcjbWVudScpLmFkZENsYXNzKCdtZW51Jyk7XG4gICAgXHR9XG4gICAgfTtcbiAgICBzdGlja3lfbmF2KCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgXHRzdGlja3lfbmF2KCk7XG4gICB9KVxufSk7XG5cbi8qbW9iaWwgbmF2Ki9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4kKCcjbW9iaWwtbmF2LXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvbicpO1xuICAgICAgICAgJCgnI21vYmlsLW5hdicpLnRvZ2dsZUNsYXNzKCdub2Rpc3BsYXknKTtcbiAgICAgIH0pXG4kKCcubW9iaWwtbmF2X19saXN0Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xuICAgJCgnI21vYmlsLW5hdi10b2dnbGUnKS50b2dnbGVDbGFzcygnb24nKTtcblxuICAgJCgnI21vYmlsLW5hdicpLnRvZ2dsZUNsYXNzKCdub2Rpc3BsYXknKTtcbn0pXG59KTtcblxuLyplbmQgbW9iaWwgbmF2Ki9cbiQoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvcm0gPSAkKCcjY29udGFjdCcpO1xuICAgIHZhciBmb3JtTWVzc2FnZXMgPSAkKCcuY29udGFjdC1mb3JtX19hZnRlcm1lc3NhZ2UnKTtcblxuICAgICQoZm9ybSkuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgZm9ybURhdGEgPSAkKGZvcm0pLnNlcmlhbGl6ZSgpO1xuICAgICQuYWpheCh7XG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIHVybDogJChmb3JtKS5hdHRyKCdhY3Rpb24nKSxcbiAgICBkYXRhOiBmb3JtRGF0YVxuICB9KVxuICAgIC5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGZvcm1NZXNzYWdlcyBkaXYgaGFzIHRoZSAnc3VjY2VzcycgY2xhc3MuXG4gICAgJChmb3JtTWVzc2FnZXMpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICQoZm9ybU1lc3NhZ2VzKS5hZGRDbGFzcygnc3VjY2VzcycpO1xuXG4gICAgLy8gU2V0IHRoZSBtZXNzYWdlIHRleHQuXG4gICAgJChmb3JtTWVzc2FnZXMpLnRleHQocmVzcG9uc2UpO1xuXG4gICAgLy8gQ2xlYXIgdGhlIGZvcm0uXG4gICAgJCgnI25hbWUnKS52YWwoJycpO1xuICAgICQoJyNlbWFpbCcpLnZhbCgnJyk7XG4gICAgJCgnI21lc3NhZ2UnKS52YWwoJycpO1xufSlcbiAgICAuZmFpbChmdW5jdGlvbihkYXRhKSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGZvcm1NZXNzYWdlcyBkaXYgaGFzIHRoZSAnZXJyb3InIGNsYXNzLlxuICAgICQoZm9ybU1lc3NhZ2VzKS5yZW1vdmVDbGFzcygnc3VjY2VzcycpO1xuICAgICQoZm9ybU1lc3NhZ2VzKS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgIC8vIFNldCB0aGUgbWVzc2FnZSB0ZXh0LlxuICAgIGlmIChkYXRhLnJlc3BvbnNlVGV4dCAhPT0gJycpIHtcbiAgICAgICAgJChmb3JtTWVzc2FnZXMpLnRleHQoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoZm9ybU1lc3NhZ2VzKS50ZXh0KCdPb3BzISBBbiBlcnJvciBvY2N1cmVkIGFuZCB5b3VyIG1lc3NhZ2UgY291bGQgbm90IGJlIHNlbnQuJyk7XG4gICAgfVxufSk7XG59KTtcbn0pOyJdfQ==
