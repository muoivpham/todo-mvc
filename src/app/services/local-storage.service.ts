import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getValue<T>(TodoStorageKey: string): import("../models/todo.model").Todo[] {
    throw new Error("Method not implemented.");
  }
  setObject(TodoStorageKey: string, todos: import("../models/todo.model").Todo[]) {
    throw new Error("Method not implemented.");
  }
  storage: Storage;

  constructor() {
    this.storage = window.localStorage;
   }
}
