const cvv = $('.card-cvv__input');
cvv.keypress(function () {
    const cvvLength = $(this).val().length;
    if (cvvLength > 2) {
        $(this).slice(0, 3);
        $(this).next('.card-holder__field').focus();
    }
});