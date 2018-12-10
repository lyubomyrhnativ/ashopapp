import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu:string[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.menu=this.dataService.mainMenu;
  }

}
