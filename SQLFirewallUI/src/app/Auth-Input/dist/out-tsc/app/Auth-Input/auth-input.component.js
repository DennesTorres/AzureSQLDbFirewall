import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GlobalComponent } from '../Common/GlobalComponent';
let AuthInputComponent = class AuthInputComponent {
    constructor() {
        this.serverName = new FormControl('');
        this.userName = new FormControl('');
        this.password = new FormControl('');
    }
    authenticate() {
        GlobalComponent.serverName = this.serverName.value;
        GlobalComponent.userName = this.userName.value;
        GlobalComponent.password = this.password.value;
        GlobalComponent.isAuthenticated = true;
    }
};
AuthInputComponent = __decorate([
    Component({
        selector: 'auth-input',
        templateUrl: './Auth-Input.component.html',
        styleUrls: ['./Auth-Input.component.css']
    })
], AuthInputComponent);
export { AuthInputComponent };
//# sourceMappingURL=auth-input.component.js.map