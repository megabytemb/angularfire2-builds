import { InjectionToken, } from '@angular/core';
import firebase from '@firebase/app';
export var FirebaseAppConfigToken = new InjectionToken('FirebaseAppConfigToken');
var FirebaseApp = (function () {
    function FirebaseApp() {
    }
    return FirebaseApp;
}());
export { FirebaseApp };
export function _firebaseAppFactory(config, appName) {
    try {
        if (appName) {
            return firebase.initializeApp(config, appName);
        }
        else {
            return firebase.initializeApp(config);
        }
    }
    catch (e) {
        if (e.code === "app/duplicate-app") {
            return firebase.app(e.name);
        }
        return firebase.app((null));
    }
}
//# sourceMappingURL=firebase.app.module.js.map