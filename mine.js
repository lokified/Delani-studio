$(document).ready(function () {
    // on clicking the work logo
    $('.work-logo1').click(function () {
        $('.work-profile1').show();
        $('.work-logo1').toggle();
    });
    $('.work-profile1').click(function () {
        $('.work-logo1').show();
        $('.work-profile1').toggle();
    });
    $('.work-logo2').click(function () {
        $('.work-profile2').show();
        $('.work-logo2').toggle();
    });
    $('.work-profile2').click(function () {
        $('.work-logo2').show();
        $('.work-profile2').toggle();
    });
    $('.work-logo3').click(function () {
        $('.work-profile3').show();
        $('.work-logo3').toggle();
    });
    $('.work-profile3').click(function () {
        $('.work-logo3').show();
        $('.work-profile3').toggle();
    });

    // on hover on the portfolios
    $('#port-1').hover(function () {
        $(".description-1").show();
        $('#port-1').hide();
    },
        function () {
            $('#port-1').show();
            $(".description-1").hide();
        });
    $('#port-2').hover(function () {
        $(".description-2").show();
        $('#port-2').hide();
    },
        function () {
            $('#port-2').show();
            $(".description-2").hide();
        });
    $('#port-3').hover(function () {
        $(".description-3").show();
        $('#port-3').hide();
    },
        function () {
            $('#port-3').show();
            $(".description-3").hide();
        });
    $('#port-4').hover(function () {
        $(".description-4").show();
        $('#port-4').hide();
    },
        function () {
            $('#port-4').show();
            $(".description-4").hide();
        });
    $('#port-5').hover(function () {
        $(".description-5").show();
        $('#port-5').hide();
    },
        function () {
            $('#port-5').show();
            $(".description-5").hide();
        });
    $('#port-6').hover(function () {
        $(".description-6").show();
        $('#port-6').hide();
    },
        function () {
            $('#port-6').show();
            $(".description-6").hide();
        });
    $('#port-7').hover(function () {
        $(".description-7").show();
        $('#port-7').hide();
    },
        function () {
            $('#port-7').show();
            $(".description-7").hide();
        });
    $('#port-8').hover(function () {
        $(".description-8").show();
        $('#port-8').hide();
    },
        function () {
            $('#port-8').show();
            $(".description-8").hide();
        });
    
    // shows alert on submit
    $('.contacts form').submit(function(){
         let yourName =$('#name').val();
         alert( yourName+ " we have received your message. Thank you for reaching out to us. ");
    })
});