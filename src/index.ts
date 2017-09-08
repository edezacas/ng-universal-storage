import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgUniversalStorageService} from './services/ng-universal-storage.service';

export * from './services/ng-universal-storage.service';
export * from './ng-universal-storage-providers/index';

@NgModule({
    imports: [
        CommonModule,
        AngularFireModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
    ],
    providers: [
        NgUniversalStorageService
    ]
})
export class NgUniversalStorageModule {

}
