$(document).ready(function() {
    function setEqualHeight() {
        let maxHeight = 0;
        $('.l-card__main').each(function() {
            let height = $(this).outerHeight();
            if (height > maxHeight) {
                maxHeight = height;
            }
        });
        $('.l-card__main').height(maxHeight);

        $('.l-section__image img').css('height' , maxHeight + 'px');
    }

    setEqualHeight();
    $(window).resize(setEqualHeight);
});

