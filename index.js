$(document).ready(function(){

    window.MicroModal.init();

    const setParam = () => {
        window.VocSignal_SendEvent('SetParameters', {
            language: 'en',
            customerId: 'zu66FVdAjdsAZi74'+ Math.floor(Math.random() * Math.floor(9999)),
            surveyId: 108
        });
    }

    $('#srt').click(() => {
        window.MicroModal.show('modal-1');
        window.VocSignal_SendEvent('ResetParameters');
        $( "#modal2__btn__n").unbind( "click" );
    })


    // 1!!!!!
    $('#modal1__btn__n').click(() => {

        window.MicroModal.close('modal-1');

        setParam();
        window.VocSignal_ListenEvent('SetParametersCallback', () => {
            window.VocSignal_SendEvent('PopupSurvey');
        })

        window.MicroModal.show('modal-3');



        $('#modal2__btn__n').click(() => {
            // window.MicroModal.close('modal-3');
            window.MicroModal.close('modal-2');
        })

    })







    $('#modal1__btn__l').click(() => {
        window.MicroModal.close('modal-1');
        window.MicroModal.show('modal-3');

        setParam();
        window.VocSignal_ListenEvent('SetParametersCallback', () => {
            window.VocSignal_SendEvent('InitPopupButton');
        })

        window.VocSignal_ListenEvent('PopupClosedCallback', () => {
            $("#modal2__btn__n").attr("disabled", false);
            window.MicroModal.close('modal-2');
            window.MicroModal.close('modal-3');

            // $( "#modal2__btn__n").unbind( "click" );
            // setTimeout(() => {
            //     window.VocSignal_SendEvent('ResetParameters');
            // }, 1000)
        })

        $('#modal2__btn__n').click(() => {
            window.VocSignal_SendEvent('PopupSurvey');
            $("#modal2__btn__n").attr("disabled", "disabled");
        })



    })
    // end 1!!!!


    $('#modal3__btn__n').click(() => {
        window.MicroModal.close('modal-3');
        window.MicroModal.show('modal-2');
    });

});

