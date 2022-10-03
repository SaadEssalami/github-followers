import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  /*course = {
    titre : 'AngularJs',
    avis : '3.99',
    participants : '21',
    prix : '45.20',
    publication : new Date(2017, 11 ,21)

  }*/
  courses :any;
  /*maBtn(){
    this.courses.push({id : 6 , title : 'PHP' })
  }*/
  loadCourse(){
    this.courses =[
      {id : 1 , title :'Angular'},
      {id : 2 , title :'React'},
      {id : 3 , title :'Symfony'},
      {id : 4 , title :'Spring Boot'},
      {id : 5 , title :'Laravel'}
    ];
  }
  edit(course : any){
    course.title="UPDATED";
  }

  remove(course: any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index , 1);
  }
  //trackBy in ngFor
  trackCourses(index : any , course : any){
    return course ? course.id : undefined;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
