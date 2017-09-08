import {NgUniversalStorageCollection} from '../ng-universal-storage-collection.interface';
import {FirebaseListObservable} from 'angularfire2/database';


export class FirebaseCollection<T> implements NgUniversalStorageCollection<T> {

    private _collection: FirebaseListObservable<any>;

    constructor(list: FirebaseListObservable<any>) {
        this._collection = list;
    }

    public addObject(obj: any): any {
        this._collection.push(obj);
    }

}