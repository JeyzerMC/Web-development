$("input").keypress(function (keypress) {
    if (keypress.which === 13) {
        $("ul").append('<li><span class="remove"><i class="fa fa-trash-o"></i></span>' +
            $("input").val() + '</li>');
        $("input").val("");
    }
});

$("ul").on("click", "li", function () {
    $(this).toggleClass("strikeThrough");
});

$("ul").on("click", ".remove", function (event) {
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("#add").click(function () {
    $("input").toggle();
});