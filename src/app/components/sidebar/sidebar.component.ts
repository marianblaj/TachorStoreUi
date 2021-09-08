import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  toggleSideBar = new EventEmitter<any>();
  userLoggedIn: any;


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getUserLoggedIn()
      .subscribe(result => {
        this.userLoggedIn = result;
        console.log("_______------")
        console.log(result)
      })
  }

  emitToggleSideBar() {
    this.toggleSideBar.emit()

  }
  login(){
    // this.userLoggedIn ='ceva';
    this.emitToggleSideBar();
    this.userLoggedIn = this.loginService.getUserLoggedIn();
  }

  logout(){
    this.userLoggedIn ='';
    this.emitToggleSideBar();
    this.loginService.logOut();
  }

  // getUserLoggedInn(){
  //   return this.loginService.getUserLoggedIn();
  // }
}
