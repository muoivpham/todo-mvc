import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {
    this.storage = window.localStorage;
   }

  storage: Storage;

  getValue<T>(TodoStorageKey: string): import("../models/todo.model").Todo[] {

  }
  setObject(TodoStorageKey: string, todos: import("../models/todo.model").Todo[]) {

  }
}
