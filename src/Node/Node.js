export default class Node {
  constructor(value, type) {
    //TODO el typo se manejará con una T, o una N "letras reservadas."
    this.value = value;
    this.type = type;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

  getType() {
    return this.type;
  }
  setType(type) {
    this.type = type;
  }
}
