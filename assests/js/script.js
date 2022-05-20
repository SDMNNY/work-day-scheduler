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


$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour1 .description").val(localStorage.getItem("hour2"));
$("#hour1 .description").val(localStorage.getItem("hour3"));
$("#hour1 .description").val(localStorage.getItem("hour4"));
$("#hour1 .description").val(localStorage.getItem("hour5"));
$("#hour1 .description").val(localStorage.getItem("hour6"));
$("#hour1 .description").val(localStorage.getItem("hour7"));
$("#hour1 .description").val(localStorage.getItem("hour8"));
$("#hour1 .description").val(localStorage.getItem("hour9"));
$("#hour1 .description").val(localStorage.getItem("hour10"));
$("#hour1 .description").val(localStorage.getItem("hour11"));
$("#hour1 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour13"));
$("#hour1 .description").val(localStorage.getItem("hour14"));
$("#hour1 .description").val(localStorage.getItem("hour15"));
$("#hour1 .description").val(localStorage.getItem("hour16"));
$("#hour1 .description").val(localStorage.getItem("hour17"));
$("#hour1 .description").val(localStorage.getItem("hour18"));
$("#hour1 .description").val(localStorage.getItem("hour19"));
$("#hour1 .description").val(localStorage.getItem("hour20"));
$("#hour1 .description").val(localStorage.getItem("hour21"));
$("#hour1 .description").val(localStorage.getItem("hour22"));
$("#hour1 .description").val(localStorage.getItem("hour23"));
$("#hour1 .description").val(localStorage.getItem("hour24"));

