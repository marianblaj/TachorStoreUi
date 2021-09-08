import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userLoggedIn: string | null = '';

  @Output()
  toggleSideBar = new EventEmitter<any>();
  // toggleUserLoggedIn = new EventEmitter<any>();



  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  emitToggleSideBar() {
    this.toggleSideBar.emit()

  }

  // emitUserLoggedIn(){
  //   this.toggleUserLoggedIn.emit();
  // }


  login(){
    this.emitToggleSideBar();
    this.userLoggedIn=this.loginService.getUserLoggedIn();
    return this.loginService.getUserLoggedIn();
  }
  logout(){
    this.userLoggedIn='';
    this.emitToggleSideBar();
    this.loginService.logOut();
  }

  // getUserLoggedInn(){
  //   return this.loginService.getUserLoggedIn();
  // }
}
