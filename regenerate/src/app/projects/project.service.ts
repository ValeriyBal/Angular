import { Project, ProjectDto } from "./project.model";

export class ProjectService {
  public projects: Project[];

  constructor() {
    const projects: ProjectDto[] = JSON.parse(localStorage.getItem("projects")) || 
	[
//	    {id:'5eb54100', name: 'Bass Settings new generation', age: 'BassSett' },    // тестовые данные
//	    {id:'5eb5413d', name: 'Проект восстановления курса по 8.15', age: 'Currency' },    
	];
    this.projects = projects.map(project => new Project(project));
  }

  _commit(projects: Project[]) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  add(project: Project) {
    var secUnix = Math.round(Date.now()/1000).toString(16);
    this.projects.push(new Project({...project, id: secUnix }));
    this._commit(this.projects);
  }

  edit(projectID: string, projectToEdit: Project) {
    this.projects = this.projects.map(project =>
      project.id === projectID
        ? new Project({
            ...project,
            ...projectToEdit
          })
        : project
    );

    this._commit(this.projects);
  }

  delete(projectID: string) {
    this.projects = this.projects.filter(({ id }) => id !== projectID);
    this._commit(this.projects);
  }

  select(projectID: string) {
    this.projects = this.projects.filter(({ id }) => id == projectID);
//    this._commit(this.projects);
  alert(this.projects);
  }


  toggle(projectID: string) {
    this.projects = this.projects.map(project =>
      project.id === projectID
        ? new Project({ ...project, complete: !project.complete })
        : project
    );

    this._commit(this.projects);
  }
}
