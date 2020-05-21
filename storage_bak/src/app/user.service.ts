import { User, UserDto } from "./user.model";
import { SelectU, SelectUsr } from "./select.model";


export class UserService {
  public users: User[];
  public selectsU: SelectU[];

  constructor() {
    const users: UserDto[] = JSON.parse(localStorage.getItem("users")) || 
	[
//	    {id:'5eb541e4', name: 'Иванов', name1: 'Василий', name2: 'Петрович', age: '27', complete: false },    // тестовые данные
//	    {id:'5eb54237', name: 'Сидоров', name1: 'Владимир', name2: 'Григорьевич', age: '48', complete: false },   
//	    {id:'5eb7f164', name: 'Петров', name1: 'Иван', name2: 'Владимирович', age: '35', complete: false },   
	];

    this.users = users.map(user => new User(user));

    const selectsU: SelectUsr[] = JSON.parse(localStorage.getItem("selects")) || [];
    this.selectsU = selectsU.map(selectU => new SelectU(selectU));
  }

  _commit(users: User[]) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  add(user: User) {
    var secUnix = Math.round(Date.now()/1000).toString(16);
    this.users.push(new User({...user, id: secUnix, complete: false }));
    this._commit(this.users);
  }

  edit(userID: string, userToEdit: User) {
    this.users = this.users.map(user =>
      user.id === userID
        ? new User({
            ...user,
            ...userToEdit
          })
        : user
    );

    this._commit(this.users);
  }

  delete(userID: string) {
// проверка на наличие пользователя в проектах
    const selectsU: SelectUsr[] = JSON.parse(localStorage.getItem("selects")) || [];
    this.selectsU = selectsU.map(selectU => new SelectU(selectU));
// можно так фильтр в if: this.selectsU.filter(({ idUser }) => idUser == userID).length
	if ( this.selectsU.filter(ip => ip.idUser.includes(userID)).length > 0 ) {
		alert('NO delete !! This user in project now... ');
	} else {
	        this.users = this.users.filter(({ id }) => id !== userID);
	        this._commit(this.users);
       }
  }

  toggle(userID: string) {
    this.users = this.users.map(user =>
      user.id === userID
        ? new User({ ...user, complete: !user.complete })
        : user
    );

    this._commit(this.users);
  }
}
