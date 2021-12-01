import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  public contactForm!:FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.contactForm=this.fb.group([
    //   this.name:["", Validators.required],
    //   this.email:["", Validators.compose([Validators.required, Validators.email])],
    //   this.subject:["", Validators.required],
    //   this.address:["", Validators.required],
    //   this.message:["", Validators.required],
    // ])
  }

  onSubmit(){
    this.result="";
    if(this.name === "" || this.email === "" ||this.subject === ""|| this.address === ""|| this.message === ""){
      this.result= "all fields are required!";
      return;
    }

    // const newContact={
    //   name:this.name,
    //   email:this.email,
    //   subject:this.subject,
    //   address:this.address,
    //   message:this.message

    // }

    this.result="Message sent!";
    return;
    
  }
}
