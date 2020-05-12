import { Select, SelectDto } from "./select.model";
// import { User, UserDto } from "./user.model";
import { SelectU, SelectUsr } from "./select.model";

export class SelectService {
  public selects: Select[];
  public selectsU: SelectU[];

  constructor() {
    const selects: SelectDto[] = JSON.parse(localStorage.getItem("users")) || [];
    this.selects = selects.map(select => new Select(select));

    const selectsU: SelectUsr[] = JSON.parse(localStorage.getItem("selects")) || [];
    this.selectsU = selectsU.map(selectU => new SelectU(selectU));
  }

  _commit(selects: Select[]) {
    localStorage.setItem("selects", JSON.stringify(selects));
  }

  add(select: Select) {
    this.selects.push(new Select(select));
    this._commit(this.selects);
  }

  edit(selectID: string, selectToEdit: Select) {
    this.selects = this.selects.map(select =>
      select.id === selectID
        ? new Select({
            ...select,
            ...selectToEdit
          })
        : select
    );

    this._commit(this.selects);
  }

  delete(selectID: string) {
    this.selects = this.selects.filter(({ id }) => id !== selectID);
    this._commit(this.selects);
  }

// --------------------------

  select(selectID: string) {

    const selects: SelectDto[] = JSON.parse(localStorage.getItem("users")) || [];
    this.selects = selects.map(select => new Select(select));

    const selectsU: SelectUsr[] = JSON.parse(localStorage.getItem("selects")) || 
  [
//    {idProj: '5eb54100', idUser: '5eb54237'},    // тестовые данные
//    {idProj: '5eb5413d', idUser: '5eb7f164'},
  ];
    this.selectsU = selectsU.map(selectU => new SelectU(selectU));

// ѕроставить галочки в selects, пробежавшись по selectsU 

	for (var i = 0; i < this.selects.length; i++) {
		const id = this.selects[i].id ;

// temporary (верхний фильтр, снесен в if) this.selectsU = this.selectsU.filter(ip => ip.idProj.includes(selectID));

	    if ( this.selectsU.filter(ip => ip.idProj.includes(selectID)).filter(it => it.idUser.includes(id)).length > 0 ) {

		    this.selects = this.selects.map(select =>
		      select.id === id
		        ? new Select({ ...select, complete: !select.complete })
		        : select
		    );

  	    }
	}
  }


  _commitSel(selectsU: SelectU[]) {
    localStorage.setItem("selects", JSON.stringify(selectsU));
  }


  toggle(selectID: string, counterID: string, checked: boolean ) {
    this.selects = this.selects.map(select =>
      select.id === selectID
        ? new Select({ ...select, complete: !select.complete })
        : select
    );

	 if (!checked) {
		this.selectsU.push(new SelectU({idProj: counterID, idUser: selectID})); 
		this._commitSel(this.selectsU); 
	    }
	 else {
		for (var i = 0; i < this.selectsU.length; i++) {
	    	if (this.selectsU[i].idUser === selectID && this.selectsU[i].idProj === counterID) {
			if (checked) {
		     	this.selectsU.splice(i, 1);
	             	this._commitSel(this.selectsU);
			}
  		    }
		}
    	}
  }

}

