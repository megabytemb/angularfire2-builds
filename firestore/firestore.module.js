import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from './firestore';
import { EnablePersistenceToken } from './enable-persistance-token';
var AngularFirestoreModule = (function () {
    function AngularFirestoreModule() {
    }
    AngularFirestoreModule.enablePersistence = function () {
        return {
            ngModule: AngularFirestoreModule,
            providers: [
                { provide: EnablePersistenceToken, useValue: true },
            ]
        };
    };
    AngularFirestoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [AngularFireModule],
                    providers: [
                        AngularFirestore,
                    ]
                },] },
    ];
    AngularFirestoreModule.ctorParameters = function () { return []; };
    return AngularFirestoreModule;
}());
export { AngularFirestoreModule };
//# sourceMappingURL=firestore.module.js.map