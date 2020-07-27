import { Component, OnInit } from '@angular/core';
import{Contacts,ContactFieldType, ContactField, IContactFindOptions} from '@ionic-native/contacts';
@Component({
  selector: 'app-contacts-app',
  templateUrl: './contacts-app.page.html',
  styleUrls: ['./contacts-app.page.scss'],
})
export class ContactsAppPage implements OnInit {
 ourtype: ContactFieldType[]=["displayName"];
 len=0;
 contactsFound=[];
  constructor(private contacts: Contacts) { 
    this.search('');
  }

  ngOnInit() {
  }
  search(q){
    const option: IContactFindOptions={
      filter: q
    }
    this.contacts.find(this.ourtype,option).then(conts=>{
      this.contactsFound=conts;
      this.len=this.contactsFound.length;
    })
  }
  onKeyUp(ev){
    this.search(ev.target.value);
  }

}
