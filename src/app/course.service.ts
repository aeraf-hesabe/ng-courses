import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses() {
    return ["Angular","TypeScript","React","Vue","Larvel","PHP"];
  }

}
