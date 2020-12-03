$(document).ready(function(){

    window.MicroModal.init();
    window.MicroModal.show('modal-1');

    $('#modal1__btn__n').click(() => {

        window.MicroModal.close('modal-1');
        window.VocSignal_SendEvent('SetParameters', {
            language: 'en',
            customerId: 'zu66FVdAjdsAZi74'+ Math.floor(Math.random() * Math.floor(9999)),
            surveyId: 108
        });

    })


    $('#modal1__btn__l').click(() => {

        window.VocSignal_ListenEvent('SetParametersCallback', () => {
            window.VocSignal_SendEvent('InitPopupButton');
            window.MicroModal.show('modal-2');

            $('.SandSIV_Feedback_show_modal_button').click(() => {
                window.MicroModal.close('modal-2');
            })
        })

        window.VocSignal_SendEvent('SetParameters', {
            language: 'en',
            customerId: 'zu66FVdAjdsAZi74'+ Math.floor(Math.random() * Math.floor(9999)),
            surveyId: 108
        });

        window.MicroModal.close('modal-1');

    })

    $('#modal2__btn__n').click(() => {
        window.VocSignal_SendEvent('PopupSurvey');
    })


});


//?surveyId=108&language=en
