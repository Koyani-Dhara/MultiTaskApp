import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {
  balance;
  saving;
  expense;
  
  submitted=false;
  constructor(private storage: Storage) { 
   
    // this.storage.set('saving',this.balance);
    //this.storage.set('expense','');
    this.storage.get("balance").then((val) => {
      console.log('Your balance is', val);
      this.balance=val;
    });
    // this.storage.get("saving").then((val) => {
    //   console.log('Your saving is', val);
    //   this.saving=val;
    // });
   
   
  }

  ngOnInit() {
   
  }
  onSubmit(exp: number){
    debugger
    this.submitted=!this.submitted;
    this.storage.set('expense',exp);
    this.storage.get("expense").then((val) => {
      console.log('Your expense is', val);
      this.expense= Number(val);
    });
    this.saving=this.balance;
    this.balance=Number(this.balance) - Number(exp);
    this.storage.set('balance',this.balance);
   
  //  this.saving=this.balance+;
   //this.storage.set('saving',this.saving);
  
  
   
  }
}
