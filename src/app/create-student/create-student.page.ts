import { Component, OnInit ,Directive, HostListener, ElementRef} from '@angular/core';

import { CrudserviceService } from '../shared/crudservice.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../shared/Student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.page.html',
  styleUrls: ['./create-student.page.scss'],
})
export class CreateStudentPage implements OnInit {

  studentForm: FormGroup;
  student: Student;
  constructor(private fb: FormBuilder,
    public router: Router,
    private crudService: CrudserviceService,
  
    private _route:ActivatedRoute,
    private el: ElementRef) {
      this.studentForm = this.fb.group({  
        id:'',
        name: ['',Validators.required],
        email: ['',[Validators.required,Validators.email]],
        rollNo: ['',Validators.required],
        age: ['',Validators.required],
        date: ['',Validators.required],
        isMale: ['',Validators.required]
      })
  }

  ngOnInit() {
  }
  onSubmit(){

   debugger
    this.student=this.studentForm.value;
 
    this.crudService.create(this.student).subscribe(student=>{
      // const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');
      // if (invalidControl) {
      //   invalidControl.focus();
      // }
       this.student = student; 
       console.log('Student Added');
     //  this.toastr.success('Submitted Successfully','Student Added');
      // this.router.navigateByUrl('/student-app');
      window.location.href='student-app';
      
    });
    this.studentForm.reset({
     name:'',
     email:'',
     rollNo:'',
     age:'',
     date:'',
     isMale:''
   });  
  // location.reload(); 
 }

}
