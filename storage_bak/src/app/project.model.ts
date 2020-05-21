export interface ProjectDto {
  id: string;
  name: string;
  age: string;
  complete: boolean;
}

export class Project {
  public id: string;
  public name: string;
  public age: string;
  public complete: boolean;

  constructor(
    { id, name, age, complete }: ProjectDto = {
      id: null,
      name: null,
      age: null,
      complete: false
    }
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.complete = complete;
  }

}
