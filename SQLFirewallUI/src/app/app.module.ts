import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthInputComponent } from "./Auth-Input/auth-input.component";
import { HiddenAuthComponent } from "./Hidden-Auth/Hidden-Auth.component";
import { HttpClientModule } from '@angular/common/http';
import { DatabaseListComponent } from './database-list/database-list.component';
import { AlternateUIComponent } from './alternate-ui/alternate-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthInputComponent,
    HiddenAuthComponent,
    DatabaseListComponent,
    AlternateUIComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
