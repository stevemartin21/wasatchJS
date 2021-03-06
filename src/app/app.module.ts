
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { HttpModule, HttpClientModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RequestInterceptor } from './services/request-interceptor';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { NavigationComponent } from './webSiteComponents/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './webSiteComponents/home/home.component';
import { JumbotronComponent } from './webSiteComponents/jumbotron/jumbotron.component';

import { ContactComponent } from './webSiteComponents/contact/contact.component';
import { BlogComponent } from './webSiteComponents/blog/blog.component';
import { DashboardComponent } from './appComponents/dashboard/dashboard.component';
import { LoginComponent } from './authComponents/login/login.component';
import { RegisterComponent } from './authComponents/register/register.component';
import { FeaturesComponent } from './webSiteComponents/features/features.component';
import { ProjectsComponent } from './webSiteComponents/projects/projects.component';
import { DevelopersComponent } from './webSiteComponents/developers/developers.component';
import { FooterComponent } from './webSiteComponents/footer/footer.component';
import { AddProfileComponent } from './appComponents/add-profile/add-profile.component';
import { AddExperienceComponent } from './appComponents/add-experience/add-experience.component';
import { AddEducationComponent } from './appComponents/add-education/add-education.component';
import { AddSkillComponent } from './appComponents/add-skill/add-skill.component';
import { AddContentComponent } from './appComponents/add-content/add-content.component';
import { AppNavigationComponent } from './appComponents/app-navigation/app-navigation.component';
import { AddProjectComponent } from './appComponents/add-project/add-project.component';
import { ManageEducationComponent } from './appComponents/manage-education/manage-education.component';
import { ManageExperienceComponent } from './appComponents/manage-experience/manage-experience.component';
import { ManageSkillsComponent } from './appComponents/manage-skills/manage-skills.component';
import { ManageProjectsComponent } from './appComponents/manage-projects/manage-projects.component';
import { ManageContentComponent } from './appComponents/manage-content/manage-content.component';
import { AddProblemComponent } from './appComponents/add-problem/add-problem.component';
import { ManageProblemsComponent } from './appComponents/manage-problems/manage-problems.component';

import { PublicProfileComponent } from './appComponents/public-profile/public-profile.component';
import { MainProfileComponent } from './appComponents/main-profile/main-profile.component';
import { AddJobComponent } from './recruiterComponents/add-job/add-job.component';
import { AddBoosterComponent } from './recruiterComponents/add-booster/add-booster.component';
import { ManageCandidatesComponent } from './recruiterComponents/manage-candidates/manage-candidates.component';
import { RecruiterDashboardComponent } from './recruiterComponents/recruiter-dashboard/recruiter-dashboard.component';
import { ManageJobsComponent } from './recruiterComponents/manage-jobs/manage-jobs.component';
import { ManageBoostersComponent } from './recruiterComponents/manage-boosters/manage-boosters.component';

import { ManageUsersComponent } from './recruiterComponents/manage-users/manage-users.component';
import { AddUserComponent } from './recruiterComponents/add-user/add-user.component';
import { RecruitersComponent } from './webSiteComponents/recruiters/recruiters.component';
import { CareerPathComponent } from './webSiteComponents/career-path/career-path.component';
import { JobBoardComponent } from './webSiteComponents/job-board/job-board.component';
import { RecruiterProfileComponent } from './recruiterComponents/recruiter-profile/recruiter-profile.component';
import { CareerTypesComponent } from './webSiteComponents/career-types/career-types.component';
import { DeveloperStatsComponent } from './appComponents/developer-stats/developer-stats.component';
import { MyProfileComponent } from './appComponents/my-profile/my-profile.component';
import { MyRecruiterProfileComponent } from './recruiterComponents/my-recruiter-profile/my-recruiter-profile.component';
import { DeveloperProfileComponent } from './appComponents/developer-profile/developer-profile.component';
import { JobBoardJobComponent } from './webSiteComponents/job-board-job/job-board-job.component';
import { DeveloperEducationComponent } from './webSiteComponents/developer-education/developer-education.component';
import { DeveloperExperienceComponent } from './webSiteComponents/developer-experience/developer-experience.component';
import { DeveloperSkillsComponent } from './webSiteComponents/developer-skills/developer-skills.component';
import { DeveloperProjectsComponent } from './webSiteComponents/developer-projects/developer-projects.component';
import { DeveloperSolutionsComponent } from './webSiteComponents/developer-solutions/developer-solutions.component';
import { RecruiterBoostersComponent } from './webSiteComponents/recruiter-boosters/recruiter-boosters.component';
import { RecruiterJobsComponent } from './webSiteComponents/recruiter-jobs/recruiter-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    JumbotronComponent,
    ContactComponent,
    BlogComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    FeaturesComponent,
    ProjectsComponent,
    DevelopersComponent,
    FooterComponent,
    AddProfileComponent,
    AddExperienceComponent,
    AddEducationComponent,
    AddSkillComponent,
    AddContentComponent,
    AppNavigationComponent,
    AddProjectComponent,
    ManageEducationComponent,
    ManageExperienceComponent,
    ManageSkillsComponent,
    ManageProjectsComponent,
    ManageContentComponent,
    AddProblemComponent,
    ManageProblemsComponent,
    PublicProfileComponent,
    MainProfileComponent,
    AddJobComponent,
    AddBoosterComponent,
    ManageCandidatesComponent,
    RecruiterDashboardComponent,
    ManageJobsComponent,
    ManageBoostersComponent,
    ManageUsersComponent,
    AddUserComponent,
    RecruitersComponent,
    CareerPathComponent,
    JobBoardComponent,
    RecruiterProfileComponent,
    CareerTypesComponent,
    DeveloperStatsComponent,
    MyProfileComponent,
    MyRecruiterProfileComponent,
    DeveloperProfileComponent,
    JobBoardJobComponent,
    DeveloperEducationComponent,
    DeveloperExperienceComponent,
    DeveloperSkillsComponent,
    DeveloperProjectsComponent,
    DeveloperSolutionsComponent,
    RecruiterBoostersComponent,
    RecruiterJobsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    AppRoutingModule
  ],
  providers: [MDBSpinningPreloader, { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true } ],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
