var Triangle = {
  type: function(sideA, sideB, sideC) {
    if (sideA === sideB && sideB === sideC) {
      return "equilateral";
    } else if (sideA === sideB && sideB !== sideC) {
      return "isosceles";
    } else if (sideA !== sideB && sideB === sideC) {
      return "isosceles";
    } else if (sideA === sideC && sideB != sideA) {
      return "isosceles";
    } else {
      return "scalene";
    }
  },
  valid: function(sideA, sideB, sideC) {
    return (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA)
  }
};



$(document).ready(function() {
  $('form#new-triangle').submit(function() {
    event.preventDefault();
    var inputSideA = parseInt($("input#side-one").val());
    var inputSideB = parseInt($("input#side-two").val());
    var inputSideC = parseInt($("input#side-three").val());
    var newTriangle = Object.create(Triangle);
    var triangleType = newTriangle.type(inputSideA,inputSideB,inputSideC);
    var triangleValid = newTriangle.valid(inputSideA, inputSideB, inputSideC); 
  
      $("#error").hide();
    if (!triangleValid){
      $("#error").show();
    } else{
      $('ul#' + triangleType).append("<li>" + inputSideA + ", "+ inputSideB+ ", " + inputSideC + "</li>");
    } 

    this.reset();
  });
});


