import * as model from "../models/teacherlist.js";
import TeacherListView from "../views/teacherlist-view.js";

const teachersController = () => {
  model.addTeachers();

  TeacherListView.render(model.state.teachers);
};

teachersController();
