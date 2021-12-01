import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string="";
  email:string="";
  subject:string="";
  address:string="";
  message:string="";
  @Output() result:string="";


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.result="";
    if(this.name === "" || this.email === "" ||this.subject === ""|| this.address === ""|| this.message === ""){
      this.result= "all fields are required!";
      return;
    }

    const newContact={
      name:this.name,
      email:this.email,
      subject:this.subject,
      address:this.address,
      message:this.message

    }

    this.result="Message sent!";
    return;
    
  }
}
