import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData:any;
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  registerUser(){
    console.debug(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.debug(res)
        localStorage.setItem('token',res.token)
        console.debug('RetrievedToken after registration:'+localStorage.getItem('token'))
        this._router.navigate(['../events'])

      },
      err => console.log(err)
    )
    
  }

}
