    $(document).ready(function () {

        $("#robin").click(function () {
            $("#changing").css({
                "background-image": "url(robin.png)"
            })
        });
        $('#mockingbird').click(function () {
            $("#changing").css({
                "background-image": "url(mockingbird1.png)"
            });
        });
        $("#sparrow").click(function () {
            $("#changing").css({
                "background-image": "url(sparrow.png)"
            });
        });
    });