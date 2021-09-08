import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {CartService} from "../../services/cart.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn: unknown;
  @Output()
  toggleSideBar = new EventEmitter<any>();
  faCartPlus = faCartPlus;
  public totalItems : number = 0;

  constructor(private cartService : CartService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(result => {
        this.totalItems = result.length;
      })

    // @ts-ignore
    this.getUserLoggedIn().subscribe(
      result => {
        this.userLoggedIn = result;
      }
    );
  }

  emitToggleSideBar() {
    this.toggleSideBar.emit();
  }

  getUserLoggedIn(){
    return this.loginService.getUserLoggedIn();
  }

  logout(){
    this.loginService.logOut();
  }
}
