import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  productsMenu=[
    'Popular Products','New Arrival', 'Best Seller', 'Special Offer'
  ]
  activeMenu=this.productsMenu[0]
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.loadProducts();

  }
  clickMenu(item){
    console.log(item);
    this.activeMenu=item;
  }
  loadProducts(){
    this.dataService.getProducts().subscribe(data=>{
      this.products=data;
      console.log(this.products);
    })
  }



}
