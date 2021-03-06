import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireStorage } from './storage';
export function _getAngularFireStorage(app) {
    return new AngularFireStorage(app);
}
export const AngularFireStorageProvider = {
    provide: AngularFireStorage,
    useFactory: _getAngularFireStorage,
    deps: [FirebaseApp]
};
export const STORAGE_PROVIDERS = [
    AngularFireStorageProvider,
];
export class AngularFireStorageModule {
}
AngularFireStorageModule.decorators = [
    { type: NgModule, args: [{
                imports: [AngularFireModule],
                providers: [STORAGE_PROVIDERS]
            },] },
];
AngularFireStorageModule.ctorParameters = () => [];
//# sourceMappingURL=storage.module.js.map