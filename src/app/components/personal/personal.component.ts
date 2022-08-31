import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  user: any = null;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.user$.subscribe( (user) => {
      if (user){
        this.user = user;
      }else{
        this.router.navigate(['']);
      }
      
    });
  }

}
