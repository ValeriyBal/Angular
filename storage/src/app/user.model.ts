export interface UserDto {
  id: string;
  name: string;
  name1: string;
  name2: string;
  age: string;
  complete: boolean;
}

export class User {
  public id: string;
  public name: string;
  public name1: string;
  public name2: string;
  public age: string;
  public complete: boolean;

  constructor(
    { id, name, name1, name2, age, complete }: UserDto = {
      id: null,	
      name: null,
      name1: null,
      name2: null,
      age: null,
      complete: false
    }
  ) {
    this.id = id;
    this.name = name;
    this.name1 = name1;
    this.name2 = name2;
    this.age = age;
    this.complete = complete;
  }

}
