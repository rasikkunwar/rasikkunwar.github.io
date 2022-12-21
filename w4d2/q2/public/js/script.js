$(function () {
    $("#formText").keypress((event) => {
        if (event.which == 13) {
            event.preventDefault();
            fetch(`/8ball`).then(res => res.json()).then(data => {
                $("#formText").focus(function(){
                    $(this).select();
                });
                $("#formText").val(data.randomAns);
                $("#formText").focus();
            })
        }
        
    })
});