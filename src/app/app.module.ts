import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorMessageComponent } from './components/commons/error-message.component';
import { SecurityComponent } from './components/security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ErrorMessageComponent,
    SecurityComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
