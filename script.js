var button = $(".saveBtn");

//Add current date at the top of the planner

$(document).ready(function () {
  var date = moment().format("dddd MMMM Do");

  $("#currentDay").text(date);
  function currentTime() {
    var current = moment().hours();
    var time = $(".time-block");

    //    console.log(current);

    time.each(function () {
      var hour = parseInt($(this).attr("id"));

      //  console.log(hour);

      if (hour === current) {
        $(this)
          .children(".col-sm-10")
          .attr("class", "present col-sm-10 description");
        //    console.log(('present' + hour + current))
      } else if (current > hour) {
        $(this)
          .children(".col-sm-10")
          .attr("class", "past col-sm-10 description");
        //    console.log(('past' + hour + current))
      } else {
        $(this)
          .children(".col-sm-10")
          .attr("class", "future col-sm-10 description");
        //    console.log(('future' + hour + current))
      }
    });
  }
  currentTime();
});
