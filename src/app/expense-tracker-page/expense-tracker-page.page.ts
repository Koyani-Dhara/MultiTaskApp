import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-expense-tracker-page',
  templateUrl: './expense-tracker-page.page.html',
  styleUrls: ['./expense-tracker-page.page.scss'],
})
export class ExpenseTrackerPagePage implements OnInit {
 balance;

  constructor(private storage: Storage,private fb: FormBuilder) { 
    
     // storage.set('balance', '');
      this.storage.get("balance").then((val) => {
      console.log('Your balance is', val);
      this.balance=val;
    });
    // Or to get a key/value pair
    
  }

  ngOnInit() {
    
  }
  // onSubmit(bal){
  //   debugger
  //  // let data=this.balanceForm.value
  //   this.storage.set('balance',bal);
  //   this.storage.get("balance").then((val) => {
  //     console.log('Your balance is', val);
  //     this.balance=val;
  //   });
  
     
  // }

}
