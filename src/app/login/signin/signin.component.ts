import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Router,Navigation, } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInform:FormGroup ;
  private _router: any;
  private _fb: any;
  constructor(private_router:Router,private_fb:FormBuilder){
    this.signInform=this._fb.Group({
      username: this._fb.control('', (Validators.required, Validators.email)),
      pwd:this._fb.control ('', (Validators.required, Validators.minLength(6)))
    })
  }
  ngOnInit(): void {
   
  }
 
  
  onsubmit(){
    if(this.signInform.valid){
      console.log('form is valid',this.signInform.value);
      this._router.navigate('/main');
      
      
    }else{
      console.log('form not valid');
      
    }
    
  }
  gotoregister(){
    this._router.navigate('/register');
  }

}

