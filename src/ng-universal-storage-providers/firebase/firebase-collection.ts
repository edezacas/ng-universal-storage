import {NgUniversalStorageCollection} from '../ng-universal-storage-collection.interface';
import {FirebaseListObservable} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

export class FirebaseCollection<T> extends Observable<T> implements NgUniversalStorageCollection<T> {

    private _collection: FirebaseListObservable<any>;

    constructor(list: FirebaseListObservable<any>) {
        super();
        this._collection = list;
    }

    public addObject(obj: any): any {
        this._collection.push(obj);
    }

}