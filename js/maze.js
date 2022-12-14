$(function () {
    let gameStarted = false;
    let gameFinished = false;
    let gameLoosed = false;

    $("#start").click(function () {
        gameStarted = true;
        gameFinished = false;
        $('#status').text("Game started, do not touch and go out of the boundary!!");
        if (gameLoosed) {
            $(".boundary").removeClass("youlose");
            $('#status').text('Click the "S" to begin.');
            gameStarted = false;
            gameLoosed = false;
        }
    })
    $("#end").click(function () {
        if (gameStarted) {
            gameFinished = true;
            gameStarted = false;
            $('#status').html("You win &#x1F602; . Click 'S' to reset");
        }
    })
    $("#maze").children(".boundary").mouseover(function () {
        showRedAlert()
    })

    $("#maze").mouseleave(function () {
        showRedAlert()
    })

    function showRedAlert() {
        if (gameStarted) {
            gameLoosed = true;
            gameStarted = false;
            $(".boundary").addClass("youlose");
            $('#status').html("Sorry, you lost &#x1F622; . Click 'S' to reset");
        }
    }
})