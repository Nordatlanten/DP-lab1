import { Teacher } from "./person.js";

export const state = {
  teachers: [],
};

export const addTeachers = () => {
  state.teachers.push(
    new Teacher(
      "Herr",
      "Ola",
      "Salo",
      "ola.salo@email.com",
      "0707-111111",
      "Svenska"
    ),
    new Teacher(
      "Doktor",
      "Ylva",
      "Fredriksson",
      "ylva.fredriksson@email.com",
      "0707-222222",
      "Matematik"
    ),
    new Teacher(
      "Sir",
      "Göran",
      "Persson",
      "goran.persson@email.com",
      "0707-333333",
      "Engelska"
    ),
    new Teacher(
      "Lady",
      "Sara",
      "Bergstrand",
      "sara.bergstrand@email.com",
      "0707-444444",
      "Engelska"
    )
  );
};
