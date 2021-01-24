import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../models/product';
import * as fromProductReducer from './product.reducer';

export const selectProductsState = createFeatureSelector<fromProductReducer.State>(
    fromProductReducer.productsFeatureKey
);

export const selectAllProducts = createSelector(
    selectProductsState,
    fromProductReducer.selectAll
);


export interface ProductViewModel {
    products: Product[];
}

export const selectProductsViewModel = createSelector(
    selectAllProducts,
    (products: Product[]): ProductViewModel => {
        return {
            products: products
        }
    }
);