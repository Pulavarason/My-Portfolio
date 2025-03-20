(function ($) {
    "use strict";

    $(document).ready(function () {
        function animateSkillBars() {
            $('.skillbar').each(function () {
                var $this = $(this);
                var skillSectionTop = $('#skills').offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();

                if (windowBottom > skillSectionTop) {
                    if (!$this.hasClass('animated')) { 
                        $this.addClass('animated');
                        $this.find('.skillbar-bar').animate({
                            width: $this.attr('data-percent')
                        }, 1000);
                    }
                }
            });
        }

        $(window).on('scroll', animateSkillBars);
        animateSkillBars(); // Run once on load
    });

}(jQuery));
