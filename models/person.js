export class Person {
  constructor(title, firstName, lastName, email, phone) {
    (this.title = title),
      (this.firstName = firstName),
      (this.lastName = lastName),
      (this.email = email);
    this.phone = phone;
  }

  showInfo() {
    console.log(this.firstName + " " + this.lastName);
  }
}

export class Teacher extends Person {
  constructor(title, firstName, lastName, email, phone, expertise) {
    super(title, firstName, lastName, email, phone);
    this.expertise = expertise;
  }

  showInfo() {
    console.log(this.firstName + " " + this.lastName, this.subjects);
  }
}

export class Student extends Person {
  constructor(title, firstName, lastName, email, phone, classCode) {
    super(title, firstName, lastName, email, phone);
    this.classCode = classCode;
  }

  showInfo() {
    console.log(this.firstName + " " + this.lastName, this.classCode);
  }
}
