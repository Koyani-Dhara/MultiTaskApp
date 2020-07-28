import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'student-app',
    loadChildren: () => import('./student-app/student-app.module').then( m => m.StudentAppPageModule)
  },
  {
    path: 'contacts-app',
    loadChildren: () => import('./contacts-app/contacts-app.module').then( m => m.ContactsAppPageModule)
  },
  {
    path: 'name-matching-page',
    loadChildren: () => import('./name-matching-page/name-matching-page.module').then( m => m.NameMatchingPagePageModule)
  },
  {
    path: 'expense-tracker-page',
    loadChildren: () => import('./expense-tracker-page/expense-tracker-page.module').then( m => m.ExpenseTrackerPagePageModule)
  },
  {
    path: 'create-student',
    loadChildren: () => import('./create-student/create-student.module').then( m => m.CreateStudentPageModule)
  },
  {
    path: 'edit-student/:Id',
    loadChildren: () => import('./edit-student/edit-student.module').then( m => m.EditStudentPageModule)
  },
  {
    path: 'add-saving',
    loadChildren: () => import('./add-saving/add-saving.module').then( m => m.AddSavingPageModule)
  },
  {
    path: 'expense',
    loadChildren: () => import('./expense/expense.module').then( m => m.ExpensePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
