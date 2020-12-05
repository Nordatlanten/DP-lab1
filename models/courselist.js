import { Course } from "./course.js";

export const state = {
  courses: [],
  course: {},
};

export const addCourses = () => {
  state.courses.push(
    new Course(1, "Svenska A", 32, "Inledningskurs i Svenska"),
    new Course(2, "Svenska B", 32, "Fortsättningskurs i Svenska"),
    new Course(3, "Matematik A", 32, "Inledningskurs i Matematik"),
    new Course(4, "Matemaik B", 32, "Fortsättningskurs i Svenska"),
    new Course(5, "Engelska A", 32, "Inledningskurs i Engelska")
  );
};
