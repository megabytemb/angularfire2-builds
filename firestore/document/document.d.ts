import { DocumentReference, SetOptions, DocumentSnapshot } from '@firebase/firestore-types';
import { Observable } from 'rxjs/Observable';
import { QueryFn, Action } from '../interfaces';
import 'rxjs/add/operator/map';
import { AngularFirestoreCollection } from '../collection/collection';
export declare class AngularFirestoreDocument<T> {
    ref: DocumentReference;
    constructor(ref: DocumentReference);
    set(data: T, options?: SetOptions): Promise<void>;
    update(data: Partial<T>): Promise<void>;
    delete(): Promise<void>;
    collection<T>(path: string, queryFn?: QueryFn): AngularFirestoreCollection<T>;
    snapshotChanges(): Observable<Action<DocumentSnapshot>>;
    valueChanges(): Observable<T>;
}
