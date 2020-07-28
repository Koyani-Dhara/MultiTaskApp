import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-add-saving',
  templateUrl: './add-saving.page.html',
  styleUrls: ['./add-saving.page.scss'],
})
export class AddSavingPage implements OnInit {
  balance: number;
  submitted=false;
  constructor(private storage: Storage) { 
    
    

    
     storage.get("balance").then((val) => {
       console.log('Your balance is', val);
       this.balance=val;
     });
    
  }

  ngOnInit() {
  }
  onSubmit(amt: number){ 
    debugger
    this.submitted=!this.submitted;
    this.balance=Number(this.balance) + Number(amt);
    this.storage.set('balance',this.balance);
    //this.storage.set('saving',this.balance);
   
  }
}
