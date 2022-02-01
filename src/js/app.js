export default class Validator {
  validateUsername(name) {
    this.result = '';
    if (/^[a-zA-Z]+?(\d{0,3}[a-zA-Z-_])*[a-zA-Z]+$/gi.test(name) === false) {
      this.result = `В логине ${name} используются недопустимые символы`;
    } else {
      this.result = `Логин ${name} можно использовать`;
    }
    return this.result;
  }
}
