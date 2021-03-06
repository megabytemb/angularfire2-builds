import { fromTask } from './observable/fromTask';
import { map, filter } from 'rxjs/operators';
export function createUploadTask(task) {
    const inner$ = fromTask(task);
    return {
        pause() { return task.pause(); },
        cancel() { return task.cancel(); },
        resume() { return task.resume(); },
        then() { return task.then(); },
        catch(onRejected) {
            return task.catch(onRejected);
        },
        snapshotChanges() { return inner$; },
        percentageChanges() {
            return inner$.pipe(filter(s => s !== undefined), map(s => s.bytesTransferred / s.totalBytes * 100));
        },
        downloadURL() {
            return inner$.pipe(filter(s => s !== undefined), filter(s => s.bytesTransferred === s.totalBytes), map(s => s.downloadURL));
        }
    };
}
//# sourceMappingURL=task.js.map