import { FirebaseApp } from 'angularfire2';
import { AngularFireStorage } from './storage';
export declare function _getAngularFireStorage(app: FirebaseApp): AngularFireStorage;
export declare const AngularFireStorageProvider: {
    provide: typeof AngularFireStorage;
    useFactory: (app: FirebaseApp) => AngularFireStorage;
    deps: typeof FirebaseApp[];
};
export declare const STORAGE_PROVIDERS: {
    provide: typeof AngularFireStorage;
    useFactory: (app: FirebaseApp) => AngularFireStorage;
    deps: typeof FirebaseApp[];
}[];
export declare class AngularFireStorageModule {
}
