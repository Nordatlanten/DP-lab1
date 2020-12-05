import * as model from "../models/courselist.js";
import CourseListView from "../views/courselist-view.js";

const courseListController = () => {
  model.addCourses();
  CourseListView.renderCourseList(model.state.courses);
};

const init = () => {
  CourseListView.addHandlerRender(courseListController);
};

init();
