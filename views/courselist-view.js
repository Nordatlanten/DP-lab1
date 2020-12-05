class CourseListView {
  _parentElement = document.querySelector(".course-list");

  addHandlerRender(subscriber) {
    ["load"].forEach((e) => window.addEventListener(e, subscriber));
  }

  renderCourseList(data) {
    let markup = data.map(this._generateCourseListMarkup).join("");
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _generateCourseListMarkup(row) {
    return `<tr data-courseno=${row.courseNumber}><td>${row.id}</td><td>${row.title}</td><td>${row.period}</td></tr>`;
  }
}

export default new CourseListView();
