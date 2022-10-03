import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(@Inject(String) private url : string , private http : HttpClient) { }
  getAll()  {
    return this.http.get(this.url)
      .pipe(map((response: any) => response)
      ,catchError(this.handleError))
     
  }

  create(resource : any) {
   return this.http.post(this.url, resource)
     .pipe(map((response: any) => response)
     ,catchError(this.handleError))
   
  }

  update(resource : any ){
   return this.http.put(this.url+'/'+resource.id , resource)
     .pipe(map((response: any) => response) 
     ,catchError(this.handleError))
  
  }

  delete(resource : any){
   return this.http.delete(this.url+'/'+resource.id )
     .pipe(map((response: any) => response)
     ,catchError(this.handleError))
   
  }
  
  private handleError(error : Response){
    {
      if(error.status === 404){
        return throwError(new NotFoundError);
      }  
      if(error.status === 400){
        return throwError(new BadInput)
      }
        return throwError(new AppError);
    }
  }
}
