import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import * as fromProductAction from '../../state/product.actions';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id') ?? 0;
    if (id <= 0) {
      this.router.navigate(['/product/list']);
    }

    this.productService.getProduct(id)
      .subscribe(
        response => this.product = response,
        err => console.log(err)
      );
  }

  onSubmit(): void {
    this.store.dispatch(fromProductAction.upsertProduct({ product: this.product }));
  }
}
