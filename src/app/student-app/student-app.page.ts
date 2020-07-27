import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../shared/crudservice.service';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../shared/Student';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-student-app',
  templateUrl: './student-app.page.html',
  styleUrls: ['./student-app.page.scss'],
})
export class StudentAppPage implements OnInit {
  students:Student[]; 
  constructor(public crudService: CrudserviceService,
    public router: Router) { }

  ngOnInit() {
  
    this.crudService.getAll().subscribe(
      (response:any) => { console.log("Response =" , response);
     
          this.students = response
        },

      err => { console.error(err)},
      () => { console.log("ALL Data FETCHED!") } 
   )
  }
   editStudent(student:Student,id){
     debugger
     this.router.navigate(['/edit-student',id])
   
    }
    deleteStudent(id : string){
      debugger 
      this.crudService.delete(id).subscribe(()=>{  
      console.log('Employee Deleted!');
      window.location.href='student-app';
      //this.toastr.success('Deleted Successfully','Employee Delete');
    });
    // location.reload();
   
  }

}
