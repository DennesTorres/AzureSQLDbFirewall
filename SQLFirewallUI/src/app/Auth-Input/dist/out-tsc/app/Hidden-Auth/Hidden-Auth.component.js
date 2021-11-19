import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HiddenAuthComponent = class HiddenAuthComponent {
    constructor() {
        this.box = 'open';
        this.arrowDown = 'assets/images/arrowsDown.jpg';
        this.arrowTop = 'assets/images/arrowsTop.jpg';
    }
    get Image() {
        if (this.box == 'open')
            return this.arrowDown;
        else
            return this.arrowTop;
    }
    get ShowWindow() {
        return this.box == 'open';
    }
    WindowClick() {
        if (this.box == 'open')
            this.box = 'close';
        else
            this.box = 'open';
    }
};
HiddenAuthComponent = __decorate([
    Component({
        selector: 'Hidden-Auth',
        templateUrl: './Hidden-Auth.component.html',
        styleUrls: ['./Hidden-Auth.component.css']
    })
], HiddenAuthComponent);
export { HiddenAuthComponent };
//# sourceMappingURL=Hidden-Auth.component.js.map