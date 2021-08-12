import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public username:string;
public password:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  //function for the submit
  submit(){
    if(this.username!="rammanohar@inncrewin.com" && this.password!="Inncrewin123"){
      window.alert('Entered User Name or Password is Incorrect');
      return;
    }

    this.router.navigate(['/details'])
  }

}
