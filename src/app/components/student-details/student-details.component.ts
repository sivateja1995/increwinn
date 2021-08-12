import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public students = [
    {
      firstName: 'siva',
      lastName: "teja",
      email: 'sivateja1034@gmail.com',
      age: '25'
    },
    {
      firstName: 'ravi',
      lastName: "krishna",
      email: 'ravi4@gmail.com',
      age: '27'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
