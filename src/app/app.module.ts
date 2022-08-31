import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { PersonalComponent } from './components/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-oxyggai0.us.auth0.com',
      clientId: 'iZRQaSrEorua1NNGKzNJMY4V4SViTlR1'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
