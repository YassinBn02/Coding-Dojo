import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { ProductSummaryComponent } from "../product-summary/product-summary.component";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductDetailsComponent, ProductSummaryComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products=[
    {
      id:1,
      name:"Pen",
      price:"5$",
      description:"Help you put your mind in a peper"
    },
    {
      id:2,
      name:"Door",
      price:"200$",
      description:"Make have your own space"
    },
    {
      id:3,
      name:"Washer",
      price:"1000$",
      description:"Make your life easier"
    }
  ]
}
