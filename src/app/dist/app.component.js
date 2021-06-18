"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var satellite_1 = require("./satellite");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'orbit-report';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var sourceList;
constructor();
{
    this.sourceList = [
        new satellite_1.Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
        new satellite_1.Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
        new satellite_1.Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
        new satellite_1.Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
        new satellite_1.Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
    ];
}
