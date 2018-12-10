import { Component, OnInit } from '@angular/core';
import{ trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import {DataService} from '../data.service';
@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
  animations:[
    trigger('openCloseMenu',[
      state('close',style({
        height:0,
        opacity:0
      })),
      state('open',style({
        height:'*',
        opacity:1
      })),
      transition('close => open',[
        animate('0.5s')
      ]),
      transition('open => close',[
        animate('0.5s')
      ])
      
    ])
  ]
})
export class MobileMenuComponent implements OnInit {
  state:string='close'
  visible:boolean=true
  mobileMenu:string[];
  constructor(private dataService:DataService) {}

  ngOnInit() {
    this.mobileMenu=
    this.dataService.mainMenu.map(item=>item.toUpperCase());
  }
  animateMenu(){
    if(this.state=='close')
    this.state='open';
    else
    this.state='close';
    this.visible=!this.visible;
  }

}
