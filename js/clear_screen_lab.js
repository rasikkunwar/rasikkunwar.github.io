$(function () {
    let timer;
    const circleSize = $('#width').val();
    const colors = [
        "aqua",
        "black",
        "blue",
        "fuchsia",
        "gray",
        "green",
        "lime",
        "maroon",
        "navy",
        "olive",
        "orange",
        "purple",
        "red",
        "silver",
        "teal",
        "white",
        "yellow",
    ];
    function makeCircle(index) {
        const color = colors[Math.round(Math.random(0, 1) * 10)];
        console.log(window.innerWidth)
        const newElement = $('<div>', {
            "id": "circle", "class": "circle", "css": {
                'background-color': color,
                'width': circleSize + "px",
                'height': circleSize + "px",
                'top': "50%",
                'left': index === 0 ? "50%" : getCircleRandomPosition(window.innerWidth) + "px"
            }
        })
            .on("click", clickHandler)
            .on('mousemove', mouseMoveHandler)
            .on('mouseout', mouseOutHandler);

        return newElement;

    }

    function startAnimation() {
        if (timer) {
            clearInterval(timer)
        }
        const totalCircles = parseInt($('#number_circles').val());
        let elements = [];
        for (let i = 0; i < totalCircles; i++) {
            elements.push(makeCircle(i));
        }
        $('#container').append(elements);

        let growth_rate = parseInt($('#growth_rate').val());
        let growth_amount = parseInt($('#growth_amount').val());
        timer = setInterval(function () {
            let circleSize = parseInt($('div').find('.circle').css('height'));
            $('div').find('.circle')
                .css({
                    'height': circleSize + growth_amount + 'px',
                    'width': circleSize + growth_amount + 'px',
                });
        }, growth_rate);
    }

    startAnimation();

    function clickHandler() {
        $(this).remove();
    }
    function mouseMoveHandler(e) {
        $(this).css('opacity', 0.5);
    }
    function mouseOutHandler() {
        $(this).css('opacity', 1);
    }

    function getCircleRandomPosition(limit) {
        let randomInt = Math.floor(Math.random() * limit);
        let adjustedInt = randomInt;
        if (adjustedInt > limit - circleSize) {
            adjustedInt = limit - circleSize;
        }
        return adjustedInt;
    }

    $("#startBtn").click(function () {
        $('div').find('.circle').remove();
        startAnimation()
    });
})