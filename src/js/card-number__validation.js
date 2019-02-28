const setCardInputs = $('.card-number__inputs--item');
console.log($('').maxLength);
const cardInputsLength = setCardInputs.length;
setCardInputs.each(function () {

    $(this).keypress(function (e) {
        switch (e.keyCode){
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return true;
                break;
            default:
                return false;
                break;
        }
        const $this = $(this);
        const inp_length = $this.val().length;

        if (inp_length === 3) {
            $this.next().focus();
        }
    })
});


// setCardInputs.each(function () {
//     const $this = $(this);
//     const ind = setCardInputs.index($this);
//
//     $this.keydown(function () {
//         const inp_length = $this.val().length;
//         //console.log(setCardInputs.index($this));
//         if ((inp_length > 3)) {
//             setCardInputs.eq(ind + 1).val('').focus();
//         }
        // if (inp_length > 3) {
        //     // $this.slice(0,4);
        //     console.log($this.next());
        //     $this.next().focus();
        // }
//     })
// });

// if(e.keyCode == 8){
//     var index = inputs.index(this);
//     if (index != 0) {
//         inputs.eq(index - 1).val('').focus();
//     }
// }
// else{
//     if($(this).val().length === this.size){
//         inputs.eq(inputs.index(this) + 1).focus();
//     }
// }

// function maxLengthCheck(object) {
//     if (object.value.length > object.maxLength)
//         object.value = object.value.slice(0, object.maxLength)
// }
//
// function isNumeric(evt) {
//     var theEvent = evt || window.event;
//     var key = theEvent.keyCode || theEvent.which;
//     key = String.fromCharCode (key);
//     var regex = /[0-9]|\./;
//     if ( !regex.test(key) ) {
//         theEvent.returnValue = false;
//         if(theEvent.preventDefault) theEvent.preventDefault();
//     }
// }