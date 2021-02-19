export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return (/^[\w-]+$/gmi.test(this.name) && /^[a-z]+/gmi.test(this.name) && (/[a-z]+$/gmi.test(this.name)) && (/\d{4,}/gm.test(this.name) === false));
  }
}
