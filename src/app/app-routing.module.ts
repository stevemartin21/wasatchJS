import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './webSiteComponents/home/home.component';
import { LoginComponent } from './authComponents/login/login.component';
import { RegisterComponent } from './authComponents/register/register.component';
import { DevelopersComponent } from './webSiteComponents/developers/developers.component';
import { DashboardComponent } from './appComponents/dashboard/dashboard.component';
import { AddEducationComponent } from './appComponents/add-education/add-education.component';
import { AddExperienceComponent } from './appComponents/add-experience/add-experience.component';
import { AddSkillComponent } from './appComponents/add-skill/add-skill.component';
import { AddContentComponent } from './appComponents/add-content/add-content.component';
import { AddProjectComponent } from './appComponents/add-project/add-project.component';
import { ManageEducationComponent } from './appComponents/manage-education/manage-education.component';
import { ManageExperienceComponent } from './appComponents/manage-experience/manage-experience.component';
import { ManageSkillsComponent } from './appComponents/manage-skills/manage-skills.component';
import { ManageProjectsComponent } from './appComponents/manage-projects/manage-projects.component';
import { ManageContentComponent } from './appComponents/manage-content/manage-content.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {path: 'developers', component: DevelopersComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addEducation', component: AddEducationComponent},
  {path: 'addExperience', component: AddExperienceComponent},
  {path: 'addSkill', component:  AddSkillComponent},
  {path: 'addContent', component: AddContentComponent},
  {path: 'addProject', component: AddProjectComponent},
  {path: 'manageEducation', component: ManageEducationComponent },
  {path: 'manageExperience', component: ManageExperienceComponent },
  {path: 'manageSkills', component: ManageSkillsComponent },
  {path: 'manageProjects', component: ManageProjectsComponent },
  {path: 'manageContent', component: ManageContentComponent },
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
