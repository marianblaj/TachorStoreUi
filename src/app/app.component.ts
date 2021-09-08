import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curs16-checkpoints';
  sidebarOpened = false;


  toggleSidebar(event: any) {
    this.sidebarOpened = !this.sidebarOpened;
  }
}
