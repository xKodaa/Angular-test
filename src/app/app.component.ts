import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  viewMode = ""; 
  courses = [1,2,3]

  i: number = 1;
  detailedCourses = [
    {id: this.i, name: "Course " + this.i++},
    {id: this.i, name: "Course " + this.i++},
    {id: this.i, name: "Course " + this.i++}
  ];
  
  email = "name@example.com";

  onAdd(){
    this.detailedCourses.push({ id: this.i, name: "Course " + this.i++}); 
  }

  onChange(detailedCourse: any){
    detailedCourse.name = detailedCourse.name + " -Updated";
    /* let index = this.detailedCourses.indexOf(detailedCourse);
    this.detailedCourses.splice(index, 1); */
  }

  resetText(detailedCourse: any){
    detailedCourse.name = "Course " + detailedCourse.id;
  }

  onKeyUp(){
    console.log(this.email); 
  }

  log(x: any){
    console.log(x);
  }
}

