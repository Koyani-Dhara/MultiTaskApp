import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl,Validators} from '@angular/forms';


import stringSimilarity from '../../../node_modules/string-similarity'
@Component({
  selector: 'app-name-matching-page',
  templateUrl: './name-matching-page.page.html',
  styleUrls: ['./name-matching-page.page.scss'],
})
export class NameMatchingPagePage implements OnInit {
  matchForm;
  name1;
  name2;
  submitted=false;
 // image;
  percentage
  constructor() { 
    
    }
    ngOnInit() {
      this.matchForm = new FormGroup({
         name1: new FormControl("",Validators.required),
         name2: new FormControl("",Validators.required)
      });
   }
  
  onSubmit(data){
    debugger
    this.submitted=!this.submitted;
    //this.image=src="assets/icon/favicon.png";
    this.name1 = data.name1;
    this.name2=data.name2;
    var similarity = stringSimilarity.compareTwoStrings(this.name1, this.name2); 
    this.percentage=similarity*100;
  }
 
  
}

