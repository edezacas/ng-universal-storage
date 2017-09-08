import {Observable} from 'rxjs/Observable';

export interface NgUniversalStorageCollection<T> extends Observable<T> {
    addObject(obj: any): any;
}
