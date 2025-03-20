(function ($) {
    "use strict";

    /*==========================
        Skill Bar Animation Fix
    ============================*/
    $(document).ready(function () {
        function animateSkillBars() {
            var skillsSection = $('#skills');
            if (skillsSection.length) {
                var offsetTop = skillsSection.offset().top;
                var windowHeight = $(window).height();
                var scrollTop = $(window).scrollTop();

                if (scrollTop + windowHeight > offsetTop) {
                    $('.skillbar').each(function () {
                        var $this = $(this);
                        if (!$this.hasClass('animated')) { // Prevent repeated animations
                            $this.addClass('animated');
                            $this.find('.skillbar-bar').animate({
                                width: $this.attr('data-percent')
                            }, 1000);
                        }
                    });
                }
            }
        }

        // Run animation on scroll
        $(window).on('scroll', animateSkillBars);
        animateSkillBars(); // Run once on page load in case already in view
    });

}(jQuery));

