$("#currentDay").text(moment().format("dddd, MMMM do, YYYY")); 

var currentTime = moment.hour();

for (i = 0; i < 25; i++) {
    if (currentTime ===i) {
        $(".container").children().eq(i).children().eq(1).addClass("present");
    } else if (currentTime > i) {
        $(".container").children().eq(i).children().eq(1).addClass("past");
    } else {
        $(".container").children().eq(i).children().eq(1).addClass("future");
    }

}



$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, text);

}
);


$(".resetBtn").on("click", function (){
    localStorage.clear();
    location.reload();

}
);


