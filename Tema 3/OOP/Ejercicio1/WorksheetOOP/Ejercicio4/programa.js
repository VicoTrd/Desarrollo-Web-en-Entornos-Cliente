class Instructor extends Lambdasian {
  constructor(params) {
    super({ name: params.name, age: params.age, location: params.location });
    this.speciality = params.speciality;
    this.favLanguage = params.favLanguage;
    this.catchPhrase = params.catchPhrase;
  }

  demo(subject) {
    return "Today we are learning about " + subject;
  }

  grade(student, subject) {
    return student.name + " receives a perfect score on " + subject;
  }

  modifiedGrade(grade) {
    grade = Math.floor(Math.random() * 100) - 100;
    return grade;
  }
}
