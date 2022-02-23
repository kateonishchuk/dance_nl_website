$(document).ready(function(){
    showStartModalWindow();
});

function showStartModalWindow(){  
    // console.log(localStorage.getItem('ccccc'));
   
    // start modal window
    if (localStorage.getItem('modalYesBtn') != 1) {
        setTimeout(function() {
            $('#exampleModalCenter').modal('show');
            $('#modal-accept-btn').on('click', function(){               
                // save state modal window
                localStorage.setItem('modalYesBtn', 1);
                $('.exampleModalCenter').modal('hide');
            });
        }, 5000);
    }
}

