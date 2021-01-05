import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailForm: FormGroup;
  subjectList = ['English', 'Maths', 'Geography', 'Physics', 'Chemistry', 'Biology'];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.userDetailForm = fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      subjects: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.userDetailForm.value);
    this.toastr.success('User Details Submitted Successfully !!!');
  }

}
