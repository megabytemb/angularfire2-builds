import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from './firestore';
import { EnablePersistenceToken } from './enable-persistance-token';
export class AngularFirestoreModule {
    static enablePersistence() {
        return {
            ngModule: AngularFirestoreModule,
            providers: [
                { provide: EnablePersistenceToken, useValue: true },
            ]
        };
    }
}
AngularFirestoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [AngularFireModule],
                providers: [
                    AngularFirestore,
                ]
            },] },
];
AngularFirestoreModule.ctorParameters = () => [];
//# sourceMappingURL=firestore.module.js.map