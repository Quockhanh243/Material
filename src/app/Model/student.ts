export class Student {
  public idStudent: number;
  public name: string;
  public birth: Date;

  constructor(idStudent, name, birth) {
    this.idStudent = idStudent;
    this.name = name;
    this.birth = birth;
  }
}
