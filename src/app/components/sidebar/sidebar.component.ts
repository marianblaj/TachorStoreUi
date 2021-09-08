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



  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  emitToggleSideBar() {
    this.toggleSideBar.emit()

  }

  // emitUserLoggedIn(){
  //   this.toggleUserLoggedIn.emit();
  // }

  userLoggedIn(){
    return this.loginService.getUserLoggedIn();
  }

  login(){
    this.emitToggleSideBar();
  }

  logout(){
    this.emitToggleSideBar();
    this.loginService.logOut();
  }

  // getUserLoggedInn(){
  //   return this.loginService.getUserLoggedIn();
  // }
}
