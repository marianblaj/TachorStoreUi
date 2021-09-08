import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {CartService} from "../../services/cart.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn: string | null =  '';
  @Output()
  toggleSideBar = new EventEmitter<any>();
  // toggleUserLoggedIn = new EventEmitter<any>();
  faCartPlus = faCartPlus;
  public totalItems: number = 0;

  constructor(private cartService: CartService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(result => {
        this.totalItems = result.length;
      })
    this.updateUserLogedIn();


  }

  emitToggleSideBar() {
    this.toggleSideBar.emit();
  }

  // emitUserLogedIn(){
  //   this.toggleUserLoggedIn.emit();
  // }

  logout() {
    this.loginService.logOut();
    this.updateUserLogedIn();
    // this.emitUserLogedIn();
  }

  updateUserLogedIn(){
    return this.loginService.getUserLoggedIn();
  }
}
