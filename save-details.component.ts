import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhoneBookService } from '../phone-book.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-save-details',
  templateUrl: './save-details.component.html',
  styleUrls: ['./save-details.component.css']
})
export class SaveDetailsComponent implements OnInit {

  constructor(private service:PhoneBookService) { }

  ngOnInit(): void {
  }

  name='';
  email='';
  phone='';

  contactInfo:any='CONTACT DETAILS';

  submited=false;

  formData={
    name:'',
    email:'',
    phone:''
  }

  @ViewChild('myForm')  myForm :NgForm;

  onSubmit(){
    this.submited=true;
    this.formData.name=this.myForm.value.name;
    this.formData.email=this.myForm.value.email;
    this.formData.phone=this.myForm.value.phone;
    //this.myForm.reset();
  }
  submitedFalse(){
    this.submited=false;
  }



  details=[

    {
      id: 'p1',
    name: 'Dillip',
    email: 'dillipksahoo1996@gmail.com',
    phone: 9853715212
    },
    {
      id: 'p2',
    name: 'Dillip',
    email: 'dillipksahoo1996@gmail.com',
    phone: 9853715212
    },
    {
      id: 'p3',
    name: 'Dillip',
    email: 'dillipksahoo1996@gmail.com',
    phone: 9853715212
    },
    {
      id: 'p4',
    name: 'Dillip',
    email: 'dillipksahoo1996@gmail.com',
    phone: 9853715212
    },
    {
      id: 'p5',
    name: 'Dillip',
    email: 'dillipksahoo1996@gmail.com',
    phone: 9853715212
    }
  ]

  onAddProduct(name,email,phone){
    this.submited=false;
    this.details.push({
      id: 'pt5',
      name:name.value ,
      email:email.value,
      phone:phone.value
    })
    this.onSave();
    this.myForm.reset();

  }

  onSave(){
    this.service.saveNumber(this.details).subscribe(
      (data)=>console.log(data),
      (error)=>console.log(error)
    )
  }
  onFetch(){
    this.service.fetchNumber().subscribe(
      (data)=>console.log(data),
      (error)=>console.log(error)
    );
  }
  

}
