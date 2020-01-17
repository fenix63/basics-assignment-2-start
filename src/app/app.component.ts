import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username = 'f';
  btnIsOn = true;

  constructor() {
    if (this.username==''){
      this.btnIsOn = false;
    }else {
      this.btnIsOn = true;
    }
  }

  ngOnInit() {

  }

  checkUserName() {
    if (this.username == '') {
      return true;
    }else{
      return false;
    }
  }

}
