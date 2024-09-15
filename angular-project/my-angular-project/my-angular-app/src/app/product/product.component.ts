import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() name! : string;
  @Input() price!: number;

  product: Product = new Product('',0);

  ngOnInit():void{
    this.product.name = this.name;
    this.product.price = this.price;
  }


}
