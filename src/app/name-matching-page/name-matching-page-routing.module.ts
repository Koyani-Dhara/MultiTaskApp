import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NameMatchingPagePage } from './name-matching-page.page';

const routes: Routes = [
  {
    path: '',
    component: NameMatchingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NameMatchingPagePageRoutingModule {}
