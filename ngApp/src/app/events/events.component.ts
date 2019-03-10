import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  usersList: any;
  token: any;


  

  constructor(private _auth: AuthService) {
    
}

  ngOnInit() {
    this.listUsers()
    this.token = this._auth.getToken();
    console.log(this.token)
  }

  listUsers() {
    this._auth.listUsers()
      .subscribe(
        res => {
          console.log('Responseqwe:'+res)

            this.usersList = res
            console.log('Users:'+this.usersList)
        },
        err => console.log(err)
      

      )
    
  }

}
