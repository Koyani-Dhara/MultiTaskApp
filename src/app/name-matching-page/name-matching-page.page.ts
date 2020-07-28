import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl,Validators} from '@angular/forms';


import stringSimilarity from '../../../node_modules/string-similarity'
import { CompileMetadataResolver } from '@angular/compiler';
import { kMaxLength } from 'buffer';
@Component({
  selector: 'app-name-matching-page',
  templateUrl: './name-matching-page.page.html',
  styleUrls: ['./name-matching-page.page.scss'],
})
export class NameMatchingPagePage implements OnInit {
  matchForm;
  name1;
  name2;
  temp;
 first=[];
 second=[];
 sort=[];
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
  asciiValue:number
  onSubmit(data){
    debugger
    this.submitted=!this.submitted;
    //this.image=src="assets/icon/favicon.png";
    this.name1 = data.name1;
    this.name2=data.name2;
    // var similarity = stringSimilarity.compareTwoStrings(this.name1, this.name2); 
    // this.percentage=similarity*100;
   
   var n=this.name1.length
   var n1=this.name2.length;

    for(var i=0;i<n;i++){
    
     this.first[i]=this.name1.charCodeAt(i);
    }
    
    for(var i=0;i<n1;i++){
    
      this.second[i]=this.name2.charCodeAt(i);
     }
     
     for(var i=0;i<n;i++){
       for(var j=0;j<n-i-1;j++){
         if(this.first[j]>this.first[j+1]){
           this.temp=this.first[j];
           this.first[j]= this.first[j+1];
           this.first[j+1]=this.temp;
         }
       }
     }
     for(var i=0;i<n1;i++){
      for(var j=0;j<n1-i-1;j++){
        if(this.second[j]>this.second[j+1]){
          this.temp=this.second[j];
          this.second[j]= this.second[j+1];
          this.second[j+1]=this.temp;
        }
      }
    }
    
     
       let uniqueCharsfirst = [...new Set(this.first)];
       let uniqueCharssecond = [...new Set(this.second)];
       
       this.compare(uniqueCharsfirst,uniqueCharssecond);
    }
    compare(uniqueCharsfirst,uniqueCharssecond){
      let count=0;
      let maxLength=0;
      debugger
      let FirstLength=uniqueCharsfirst.length;
      let SecondLength=uniqueCharssecond.length;
      if(FirstLength>SecondLength){
        for(var i=0;i<FirstLength;i++){
          for(var j=0;j<SecondLength;j++){
              if(uniqueCharsfirst[i]==uniqueCharssecond[j]){
                count=count+1;
              }
          }
        }
        maxLength=FirstLength;
      }
      else{
        for(var i=0;i<SecondLength;i++){
          for(var j=0;j<FirstLength;j++){
              if(uniqueCharssecond[i]==uniqueCharsfirst[j]){
                count=count+1;
              }
          }
        }
        maxLength=SecondLength;
      }
      console.log(count);
      this.percentage=(count/maxLength)*100

    }
}

