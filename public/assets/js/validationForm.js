
// validacion 
/** 
let c1 = 0;
let c2 = 0;

$('.entrada').keyup( function(){

    if ($('.has-error').length > 0 && c1 == 0){
        console.log('error')
    
        $($('.has-error').children()[2]).removeClass('bmd-help')
        c1++; 
    } else {
        c1++;
        console.log('no error')
        $($('.has-error').children()[2]).addClass('bmd-help')
        
    }
    

})
*/

$('#categoriaProd').rules('add', {required: true,messeges: {required:'test'}})