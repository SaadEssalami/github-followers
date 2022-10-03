import { Coursesservice } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector:'courses',
    template : `
             <input type="text" [(ngModel)]="email" (keyup.enter)="onKeyUp()">
             <p>{{ email }}</p>
    `,
})
export class CoursesComponent{
    
    email : string = "me@gmail.com";

    title="La liste de mes cours";
    image=""//https://miro.medium.com/max/895/1*W6oKANhN0qKfJII3h_DHpA.png

    courses ;
    constructor(coursesService : Coursesservice){
       
        this.courses=coursesService.getCourses(); // had ktaba katsema injection de dependance
    }

    getTitle(){
      return this.title;
    }
    onClick () {
        //$event.stopPropagation();
        alert ('button clicked'  );
    }

    onClickDev(){
        console.log('div clicked');
    }
    
    onKeyUp( ){
       
            console.log(this.email);

        
    }
    

}