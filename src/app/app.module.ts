
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { HttpModule, HttpClientModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

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
    ManageProblemsComponent
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
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
