
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
    FooterComponent
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
