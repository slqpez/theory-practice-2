export default class Prod {
  constructor(prodNumber, leftSide, rigthSide) {
    this.prodNumber = prodNumber;
    this.leftSide = leftSide;
    this.rigthSide = rigthSide;
  }

  getProdNumber() {
    return this.prodNumber;
  }

  setProdNumber(prodNumber) {
    this.prodNumber = prodNumber;
  }

  getLeftSide() {
    return this.leftSide;
  }

  setLeftSide(leftSide) {
    this.leftSide = leftSide;
  }

  getRigthSide() {
    return this.rigthSide;
  }

  setRigthSide(rigthSide) {
    this.rigthSide = rigthSide;
  }
}
