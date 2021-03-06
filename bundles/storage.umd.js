(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Observable'), require('rxjs/operators'), require('rxjs/observable/from'), require('@angular/core'), require('angularfire2')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs/Observable', 'rxjs/operators', 'rxjs/observable/from', '@angular/core', 'angularfire2'], factory) :
    (factory((global.angularfire2 = global.angularfire2 || {}, global.angularfire2.storage = global.angularfire2.storage || {}),global.Rx,global.Rx.operators,global.Rx.Observable,global.ng.core,global.angularfire2));
}(this, (function (exports,rxjs_Observable,rxjs_operators,rxjs_observable_from,_angular_core,angularfire2) { 'use strict';

function fromTask(task) {
    return new rxjs_Observable.Observable(function (subscriber) {
        var progress = function (snap) { return subscriber.next(snap); };
        var error = function (e) { return subscriber.error(e); };
        var complete = function () { return subscriber.complete(); };
        task.on('state_changed', progress, error, complete);
        return function () { return task.cancel(); };
    });
}

function createUploadTask(task) {
    var inner$ = fromTask(task);
    return {
        pause: function () { return task.pause(); },
        cancel: function () { return task.cancel(); },
        resume: function () { return task.resume(); },
        then: function () { return task.then(); },
        catch: function (onRejected) {
            return task.catch(onRejected);
        },
        snapshotChanges: function () { return inner$; },
        percentageChanges: function () {
            return inner$.pipe(rxjs_operators.filter(function (s) { return s !== undefined; }), rxjs_operators.map(function (s) { return s.bytesTransferred / s.totalBytes * 100; }));
        },
        downloadURL: function () {
            return inner$.pipe(rxjs_operators.filter(function (s) { return s !== undefined; }), rxjs_operators.filter(function (s) { return s.bytesTransferred === s.totalBytes; }), rxjs_operators.map(function (s) { return s.downloadURL; }));
        }
    };
}

function createStorageRef(ref) {
    return {
        getDownloadURL: function () { return rxjs_observable_from.from(ref.getDownloadURL()); },
        getMetadata: function () { return rxjs_observable_from.from(ref.getMetadata()); },
        delete: function () { return rxjs_observable_from.from(ref.delete()); },
        child: function (path) { return createStorageRef(ref.child(path)); },
        updateMetatdata: function (meta) {
            return rxjs_observable_from.from(ref.updateMetadata(meta));
        },
        put: function (data, metadata) {
            var task = ref.put(data, metadata);
            return createUploadTask(task);
        },
        putString: function (data, format, metadata) {
            var task = ref.putString(data, format, metadata);
            return createUploadTask(task);
        }
    };
}

var AngularFireStorage = (function () {
    function AngularFireStorage(app) {
        this.app = app;
        this.storage = app.storage();
    }
    AngularFireStorage.prototype.ref = function (path) {
        return createStorageRef(this.storage.ref(path));
    };
    AngularFireStorage.prototype.upload = function (path, data, metadata) {
        var storageRef = this.storage.ref(path);
        var ref = createStorageRef(storageRef);
        return ref.put(data, metadata);
    };
    AngularFireStorage.decorators = [
        { type: _angular_core.Injectable },
    ];
    AngularFireStorage.ctorParameters = function () { return [
        { type: angularfire2.FirebaseApp, },
    ]; };
    return AngularFireStorage;
}());

function _getAngularFireStorage(app) {
    return new AngularFireStorage(app);
}
var AngularFireStorageProvider = {
    provide: AngularFireStorage,
    useFactory: _getAngularFireStorage,
    deps: [angularfire2.FirebaseApp]
};
var STORAGE_PROVIDERS = [
    AngularFireStorageProvider,
];
var AngularFireStorageModule = (function () {
    function AngularFireStorageModule() {
    }
    AngularFireStorageModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [angularfire2.AngularFireModule],
                    providers: [STORAGE_PROVIDERS]
                },] },
    ];
    AngularFireStorageModule.ctorParameters = function () { return []; };
    return AngularFireStorageModule;
}());

exports.createStorageRef = createStorageRef;
exports.AngularFireStorage = AngularFireStorage;
exports.createUploadTask = createUploadTask;
exports.fromTask = fromTask;
exports._getAngularFireStorage = _getAngularFireStorage;
exports.AngularFireStorageProvider = AngularFireStorageProvider;
exports.STORAGE_PROVIDERS = STORAGE_PROVIDERS;
exports.AngularFireStorageModule = AngularFireStorageModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
