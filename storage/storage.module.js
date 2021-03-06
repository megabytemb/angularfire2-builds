import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireStorage } from './storage';
export function _getAngularFireStorage(app) {
    return new AngularFireStorage(app);
}
export var AngularFireStorageProvider = {
    provide: AngularFireStorage,
    useFactory: _getAngularFireStorage,
    deps: [FirebaseApp]
};
export var STORAGE_PROVIDERS = [
    AngularFireStorageProvider,
];
var AngularFireStorageModule = (function () {
    function AngularFireStorageModule() {
    }
    AngularFireStorageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [AngularFireModule],
                    providers: [STORAGE_PROVIDERS]
                },] },
    ];
    AngularFireStorageModule.ctorParameters = function () { return []; };
    return AngularFireStorageModule;
}());
export { AngularFireStorageModule };
//# sourceMappingURL=storage.module.js.map