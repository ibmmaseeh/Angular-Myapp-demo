import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { promise} from "protractor";



@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {  //controller
  title:string = 'Userform';
  user:User=new User(); //model -stores all form data
  userArray:User[]=[];
  constructor(private userService:UserService) { }
  save(){
    this.userArray.push(Object.assign({},this.user));
    const promise = this.userService.save(this.user);
    promise.subscribe(response => console.log(response));
    // console.log('working...');
    // console.log(this.user.firstName);
    // this.user.firstname = 'John';

  }
  ngOnInit(): void {
  }
}
