export default class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  checkType() {
    if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
      return "This is not a triangle...";
    } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
      return "This forms a scalene triangle!";
    }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
      return "This forms an equilateral triangle!";
    } else {
      return "This forms an isosceles triangle!";
    }
  }    
}