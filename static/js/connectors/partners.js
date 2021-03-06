//grab first four articles of currently active year
$(".connectors__partners__partner").slice(1, 9).css("display", "inline-block");

hideButton()

function hideButton(){
    if($(".connectors__partners__partner:hidden").length === 0) {
        $("#loadMore").hide()
    }
}

$("#loadMore").click(function(e){ // click event for load more
    e.preventDefault();
    if($(".connectors__partners__partner:hidden").length !== 0){ // check if any hidden divs still exist
        $(".connectors__partners__partner:hidden").slice(0, 8).css("display", "block");

        hideButton()

    } else if($("connectors__partners__partner:hidden").length === 0){
        $("#loadMore").hide()
    }
});

// search logic
$("#searchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();

    $(".connectors__partners__partner").css("display", "block").filter(function() {

        // hide featured sectinn during search
        $(".featured").css("display", "none")

        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        if($(".connectors__partners__partner:visible").length < 9) {
            $("#loadMore").hide()
        }

        if($(".connectors__partners__partner:visible").length == 0) {
            $(".badge").css("display", "block")
        }

        if(value.length == 0) {
            $(".connectors__partners__partner").css("display", "none");
            $(".connectors__partners__partner").slice(0, 8).css("display", "block");
            $(".featured").css("display", "block")
            $(".badge").css("display", "none")
            if($(".connectors__partners__partner:visible").length < 9) {
                $("#loadMore").show()
            }
        }
    });
});
