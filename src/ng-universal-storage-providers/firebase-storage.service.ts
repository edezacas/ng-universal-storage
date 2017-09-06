import {Injectable} from '@angular/core';
import {NgUniversalStorageProviderInterface} from "./ng-universal-storage-provider.interface";
import {FirebaseAppConfig, FirebaseApp} from 'angularfire2';
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseStorageService implements NgUniversalStorageProviderInterface {
    app: FirebaseApp;
    db: AngularFireDatabase;

    initStorageProvider(config: FirebaseAppConfig): FirebaseApp {
        this.app = firebase.initializeApp(config);
        this.db = new AngularFireDatabase(this.app);
        return this.app;
    }

    getDb() {
        return this.db;
    }

    addObject(name: string): FirebaseObjectObservable<any> {
        return this.db.object(name);
    }

    getObject(name: string): FirebaseObjectObservable<any> {
        return this.db.object(name);
    }

    addCollection(name: string): FirebaseListObservable<any> {
        return this.db.list(name);
    }

    getCollection(name: string): FirebaseListObservable<any> {
        return this.db.list(name);
    }

    saveObject(obj: FirebaseObjectObservable<any>, values: any) {
        obj.set(values);
    }
}
