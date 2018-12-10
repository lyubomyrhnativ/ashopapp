import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product;
  @Output() eventProduct=new EventEmitter();
  path:string='../../assets/'
  constructor(private dataService:DataService) { }

  ngOnInit() {
    console.log(this.product);
  }
  removeProduct(item){
    console.log('removeProduct:');
    console.log(item);
    this.dataService.removeProduct(item).subscribe(data=>{
      console.log(data);
      this.sendEvent();
    });
  }
  sendEvent(){
    this.eventProduct.emit();
  }
  bindImg(){
    
    if(!this.product.path)
    return this.path+"temp_270_300.png";
    return this.path+this.product.path;
    
  }

}
