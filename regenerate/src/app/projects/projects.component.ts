import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ProjectService } from 'src/app/projects/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects;
  public projectForm;

  constructor(
    private projectService: ProjectService,
    private formBuilder: FormBuilder
  ) {
    this.projectForm = this.formBuilder.group({
      name: '',
      age: ''
    });
  }

  ngOnInit() {
    this.refreshProjects();
  }
  refreshProjects() {
    this.projects = this.projectService.projects;
  }

  add(projectForm) {
	 document.getElementById('userS').style.display = 'none';
    this.projectService.add(projectForm);
    this.refreshProjects();
    this.projectForm.reset();
  }
  delete({ id }) {
    this.projectService.delete(id);
    this.refreshProjects();
  }

//  select({ id }) {
//    this.projectService.select(id);
//    this.refreshProjects();
//  }

  edit(project, { innerText: age }) {
    const { id } = project;
    this.projectService.edit(id, { ...project, age });
    this.refreshProjects();
  }
  editName(project, { innerText: name }) {
    const { id } = project;
    this.projectService.edit(id, { ...project, name });
    this.refreshProjects();
  }
  toggle({ id }) {
    this.projectService.toggle(id);
    this.refreshProjects();
  }
}
