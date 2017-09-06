import {Observable} from 'rxjs/Observable';

export interface NgUniversalStorageProviderInterface {

    /**
     * Initialize Storage Provider
     * @param config
     * @param providerName
     * @returns {any}
     */
    initStorageProvider(config: any, providerName?: string): any;

    /**
     * Return a database instance
     *
     */
    getDb();

    /**
     * Add new object to database
     * @param {string} key
     */
    addObject(key: string): Observable<any>;

    /**
     * Get object from database
     * @param {string} key
     */
    getObject(key: string): Observable<any>;

    /**
     * Save object values to database
     * @param obj
     * @param values
     * @returns {any}
     */
    saveObject(obj: any, values): any;

    /**
     * Add collection to database
     * @param {string} key
     */
    addCollection(key: string): Observable<any>;

    /**
     * Get collection from database
     * @param {string} key
     */
    getCollection(key: string): Observable<any>;
}