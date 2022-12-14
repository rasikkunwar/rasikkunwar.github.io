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
            $('#status').text("You win :). Click 'S' to reset");
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
            $('#status').text("Sorry, you lost :(. Click 'S' to reset");
        }
    }
})