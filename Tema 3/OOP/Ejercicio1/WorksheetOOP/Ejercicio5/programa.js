class Student extends Lambdasian {
  constructor(params) {
    super({ name: params.name, age: params.age, location: params.location });
    this.previousBackground = params.previousBackground;
    this.className = params.className;
    this.favSubjects = params.favSubjects;
    this.grade = params.grade;
  }

  listSubjects() {
    return "Loving " + this.favSubjects.join(", ");
  }

  PRAssignment(subject) {
    return this.name + " has submitted a PR for " + subject;
  }

  sprintChallenge(subject) {
    return this.name + " has begun sprint challenge on " + subject;
  }

  graduate(){
    let canGraduate = false;

    if(this.grade >= 70){
      canGraduate = true;
      console.log("You can to be graduated.");
    }
    else
      console.log("You can not to be graduated.");

    return canGraduate;
  }
}
