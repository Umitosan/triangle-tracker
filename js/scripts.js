$(document).ready(function(){

  $(".tri-form").submit(function(event){

    var triangleType = "(empty before if statements)";
    var tri1Input = parseInt($("input#sideA").val());
    var tri2Input = parseInt($("input#sideB").val());
    var tri3Input = parseInt($("input#sideC").val());

    if (((tri1Input + tri2Input) <= tri3Input) || ((tri1Input + tri3Input) <= tri2Input) || ((tri2Input + tri3Input) <= tri1Input)) { triangleType = "not a triangle";
    } else if ((tri1Input === tri2Input) && (tri2Input === tri3Input)) {
      triangleType = "equilateral";
    } else if ((tri1Input === tri2Input) || (tri1Input === tri3Input) || (tri2Input === tri3Input)) {
      triangleType = "isosceles";
    } else if (tri1Input !== tri2Input && tri1Input !== tri3Input && tri2Input !== tri3Input) {
      triangleType = "scalene";
    } else {
      alert("contact the devs!");
    }

    $("#infoSpan").text(triangleType);

    $(".tri-info").show();
    event.preventDefault();
  });

});
