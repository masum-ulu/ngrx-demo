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

export const selectAllEntities = createSelector(
    selectProductsState,
    fromProductReducer.selectEntities
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

export const entityExists = createSelector(
    selectAllEntities,
    (entities, props): boolean => {
        return entities[props.id] == undefined ? false : true;
    }
);

export const selecetEntityById = createSelector(
    selectAllEntities,
    (entities, props) => entities[props.id]
);
