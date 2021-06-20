import { Component, OnInit } from '@angular/core';
import{UserService} from './user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private user:UserService){
    this.user.getData().subscribe((session: any) =>
    {
      this.data=session.data;
      this.totalLength=session.data.length;
      console.log(session.data);
    });
    console.log(this.email?.touched)
    
  }
  ngOnInit():void{

  }
  totalLength:any;
  page:number=1;

  data: any=[];
  i=0;
  delete(value:any){
    this.data.splice(value,1);
    this.totalLength=this.totalLength-1;
  }
  ver=false;
  vertical(){
    this.ver=true;
    this.hor=false;
    console.log(this.ver);
    console.log(this.ver);
  }
  hor=true;
  horizontal(){
    this.hor=true;
    this.ver=false;
    console.log(this.ver);
    console.log(this.ver);
  }
  form=new FormGroup({
    first:new FormControl('',
      Validators.required),
      last:new FormControl('',
      Validators.required),
      address:new FormControl('',
      Validators.required),
      country:new FormControl('',
      Validators.required),
    email:new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone:new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]  ) 
    }
    )
  get email(){
    return this.form.get('email');
  }
  get first(){
    return this.form.get('first');
  }
  get last(){
    return this.form.get('last');
  }
  get address(){
    return this.form.get('address');
  }
  get country(){
    return this.form.get('country');
  }
  get phone(){
    return this.form.get('phone');
  }

}
