export class Course {
  constructor(id, title, period, summary) {
    this.id = id;
    this.title = title;
    this.period = period;
    this.summary = summary;
  }

  showInfo() {
    console.log(this.title + ": " + this.summary);
  }
}
