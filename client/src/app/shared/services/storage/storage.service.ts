import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storageInstance: Storage | null = null;

  constructor(private storage: Storage) {}

  async init() {
    const storage = await this.storage.create();
    this.storageInstance = storage;
  }

  set(key: string, value: any): Promise<any> {
    if (!this.storageInstance) {
        throw new Error('No storage provider found!');
    }
    return this.storageInstance?.set(key, value);
  }

  get(key: string): Promise<any> {
    if (!this.storageInstance) {
        throw new Error('No storage provider found!');
    }
    return this.storageInstance?.get(key);
  }

  remove(key: string): Promise<any> {
    if (!this.storageInstance) {
        throw new Error('No storage provider found!');
    }
    return this.storageInstance.remove(key);
  }

  clear(): Promise<void> {
    if (!this.storageInstance) {
        throw new Error('No storage provider found!');
    }
    return this.storageInstance.clear();
  }
}
