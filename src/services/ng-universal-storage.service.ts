import {Injectable, ReflectiveInjector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NgUniversalStorageProviderInterface} from '../ng-universal-storage-providers/ng-universal-storage-provider.interface'
import {StorageProviders} from "../ng-universal-storage-providers/ng-universal-storage-providers";
import {FirebaseStorageService} from '../ng-universal-storage-providers/firebase-storage.service';

@Injectable()
export class NgUniversalStorageService implements NgUniversalStorageProviderInterface {
    db: any;
    storageProvider: NgUniversalStorageProviderInterface;

    constructor() {

    }

    public initStorageProvider(config: any, storageProvider: StorageProviders) {
        switch (storageProvider) {
            case StorageProviders.FIREBASE_PROVIDER:
                let injector = ReflectiveInjector.resolveAndCreate([FirebaseStorageService]);
                let firebaseStorageService = injector.get(FirebaseStorageService);
                firebaseStorageService.initStorageProvider(config);
                this.storageProvider = firebaseStorageService;
                this.db = firebaseStorageService.getDb();
                break;
        }
    }

    public getDb(): any {
        return this.db;
    }

    public addObject(name: string): Observable<any> {
        return this.storageProvider.addObject(name);
    }

    public getObject(name: string): Observable<any> {
        return this.storageProvider.getObject(name);
    }

    public saveObject(obj: any, values) {
        this.storageProvider.saveObject(obj, values);
    }

    public addCollection(name: string): Observable<any> {
        return this.storageProvider.addCollection(name);
    }

    public getCollection(name: string): Observable<any> {
        return this.storageProvider.getCollection(name);
    }
}
