class ProjectManager extends Instructor{
    constructor(params){
        super({name: params.name, age: params.age, location: params.location, previousBackground : params.previousBackground, className : params.className, favSubjects : params.favSubjects})
        this.gradClassName = params.gradClassName;
        this.favInstructor = params.favInstructor;
    }

    standUp(chanel){
        return this.name + " announces to " + chanel
    }

    debugsCode(student, subject){
        return this.name + " debugs " + student.name + "'s code on " + subject;
    }
}