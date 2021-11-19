import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthInputComponent } from "./Auth-Input/auth-input.component";
import { HiddenAuthComponent } from "./Hidden-Auth/Hidden-Auth.component";
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            AuthInputComponent,
            HiddenAuthComponent
        ],
        imports: [
            BrowserModule,
            ReactiveFormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map