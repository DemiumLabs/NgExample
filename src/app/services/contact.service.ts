import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { 
  }

  sendForm(form:any):Observable<any>{
    console.log(form);
   return new Observable<string>(); 
  }

}
