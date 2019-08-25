import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators} from '@angular/forms';
 

@Component({
  selector: 'app-initial-details',
  templateUrl: './initial-details.component.html',
  styleUrls: ['./initial-details.component.scss']
})
export class InitialDetailsComponent implements OnInit {

  
  profileForm = this.fb.group({
    email: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      
   onSubmit(){
    console.warn(this.ProfileForm.value);
   }
    
  });

 

    
   


   
 

  constructor(private fb:FormBuilder) { 
    
  }

  ngOnInit() {
   


  
    }
  }
  


