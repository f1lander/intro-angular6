import { Injectable } from '@angular/core';

import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} from 'mongodb-stitch-browser-sdk';


@Injectable({
  providedIn: 'root'
})
export class MongoStitchService {

  client = null;
  db = null;
  user = null;
  constructor() {
    this.client = Stitch.initializeDefaultAppClient('angular-tutorial-stitch-app-uvjcn');
    this.db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('test-db');
    // hacemos el anonymous login para obtener un id
    this.client.auth.loginWithCredential(new AnonymousCredential()).then(user => this.user = user);

  }

  find(collection: string) {
    return this.db.collection(collection).find({ owner_id: this.user.id }, { limit: 100 }).asArray();
  }
}
