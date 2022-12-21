$(function () {
    setTimeout(() => {
        $("#msg").text("");
    }, 5000)

    $(".addToCart").submit(function (e) {
        e.preventDefault();
        const data = $(this).serialize();
        $.post('/addToCart',  data)
            .done(data => {
                $("#msg").text("Successfully added to cart")
                $("#totalCart").text(data.total_cart);
            })
    });
})