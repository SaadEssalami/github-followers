import { Injectable } from "@angular/core";

@Injectable()
export class Coursesservice{

    getCourses() : string[] {
        return ['Laravel', 'Sumfony', 'React','Spring Boot'];
    }

}