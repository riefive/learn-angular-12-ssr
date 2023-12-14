import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorMessageComponent } from './components/commons/error-message.component';
import { SecurityComponent } from './components/security/security.component';
import { DemoImageComponent } from './components/demo-image/demo-image.component';
import { LazyImageDirective } from './directives/lazy-image.directive';
import { TextHighlightDirective } from './directives/text-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ErrorMessageComponent,
    SecurityComponent,
    DemoImageComponent,
    LazyImageDirective,
    TextHighlightDirective
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
