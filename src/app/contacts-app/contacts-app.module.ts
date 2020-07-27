import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import{Contacts} from '@ionic-native/contacts';
import { ContactsAppPageRoutingModule } from './contacts-app-routing.module';

import { ContactsAppPage } from './contacts-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsAppPageRoutingModule
  ],
  declarations: [ContactsAppPage],
  providers:[Contacts]
})
export class ContactsAppPageModule {}
