import { Component} from '@angular/core';
  
@Component({
    selector: 'app-root',
    template: `<div style="padding-top:20px;">
                <div style="background:#d8d8f8; padding:20px 0 0 20px; height:60px;" >
		<a routerLink="/users"
		   routerLinkActive="active"
		   [routerLinkActiveOptions]="{exact:true}">
		   Пользователи
		</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a routerLink="/projects"
		   routerLinkActive="active">
		   Проекты
		</a>
		</div>
	       <hr>
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {}