$(document).ready(function(){


  var equilateralBool = (sideA === sideB && sideB === sideC);
  var isoscelesBool = (sideA === sideB || sideA === sideC || sideB === sideC);

  var scaleneBool = (sideA !== sideB && sideA !== sideC && sideB !== sideC);

  var nontriBool = (((sideA + sideB) <= sideC) || ((sideA + sideC) <= sideB) || ((sideB + sideC) <= sideA));

});
