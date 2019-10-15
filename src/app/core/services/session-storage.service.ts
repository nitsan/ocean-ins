import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() {
  }

  public static saveToSessionStorage(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public static LoadFromSessionStorage(key: string): any {
    return JSON.parse(sessionStorage.getItem(key));
  }

  public static removeKeys(keys: Array<string>) {
    keys.forEach((key: string) => sessionStorage.removeItem(key));
  }
}
