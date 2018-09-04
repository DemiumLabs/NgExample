import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public data:any;

  constructor(private contactService:ContactService) {
    this.data = {
      title:null
    }

  }

  ngOnInit() {
  }

  send(){
        this.contactService.sendForm(this.data)
          .subscribe((result:any)=> console.log(result));
  }

}
