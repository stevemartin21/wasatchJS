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
import {AddProfileComponent } from './appComponents/add-profile/add-profile.component';
import {AddProblemComponent} from './appComponents/add-problem/add-problem.component';
import {ManageProblemsComponent} from './appComponents/manage-problems/manage-problems.component';
import {MainProfileComponent} from './appComponents/main-profile/main-profile.component';
import {PublicProfileComponent} from './appComponents/public-profile/public-profile.component';
import {RecruiterDashboardComponent} from './recruiterComponents/recruiter-dashboard/recruiter-dashboard.component';
import {AddJobComponent} from './recruiterComponents/add-job/add-job.component';
import {AddBoosterComponent} from './recruiterComponents/add-booster/add-booster.component';
import {ManageJobsComponent} from './recruiterComponents/manage-jobs/manage-jobs.component';
import {ManageBoostersComponent} from './recruiterComponents/manage-boosters/manage-boosters.component';

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
  {path: 'editEducation/:id', component: AddEducationComponent },
  {path: 'editExperience/:id', component: AddExperienceComponent },
  {path: 'editEducation/:id', component: AddEducationComponent },
  {path: 'editSkill/:id', component: AddSkillComponent },
  {path: 'editContent/:id', component: AddContentComponent },
  {path: 'editProfile/:id', component: AddProfileComponent },
  {path: 'editProject/:id', component: AddProjectComponent },
  {path: 'editProblem/:id', component: AddProblemComponent },
  {path: 'addProblem', component: AddProblemComponent },
  {path: 'manageProblems', component: ManageProblemsComponent },
  {path: 'addProfile', component: AddProfileComponent },
  {path: 'mainProfile', component: MainProfileComponent },
  {path: 'publicProfile/:id', component: PublicProfileComponent },
  {path: 'recruiterDashboard', component: RecruiterDashboardComponent},
  {path: 'addJob', component: AddJobComponent},
  {path: 'addBooster', component: AddBoosterComponent},
  {path: 'manageBoosters', component: ManageBoostersComponent},
  {path: 'manageJobs', component: ManageJobsComponent},
  {path: 'editJob/:id', component: AddJobComponent},
  {path: 'editBooster/:id', component: AddBoosterComponent}


];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
