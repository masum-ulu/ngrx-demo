import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Product } from '../models/product';

/**
 * Load Products
 */
export const loadProducts = createAction(
  '[Product Component] Load Products'
);

export const loadAdminProducts = createAction(
  '[Product List Component] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product Effect] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product Effect] Load Products Failure',
  props<{ error: any }>()
);


export const addProduct = createAction(
  '[Product/API] Add Product',
  props<{ product: Product }>()
);

export const upsertProduct = createAction(
  '[Product/API] Upsert Product',
  props<{ product: Product }>()
);

export const addProducts = createAction(
  '[Product/API] Add Products',
  props<{ products: Product[] }>()
);

export const upsertProducts = createAction(
  '[Product/API] Upsert Products',
  props<{ products: Product[] }>()
);

export const updateProduct = createAction(
  '[Product/API] Update Product',
  props<{ product: Update<Product> }>()
);

export const updateProducts = createAction(
  '[Product/API] Update Products',
  props<{ products: Update<Product>[] }>()
);

export const deleteProduct = createAction(
  '[Product/API] Delete Product',
  props<{ id: string }>()
);

export const deleteProducts = createAction(
  '[Product/API] Delete Products',
  props<{ ids: string[] }>()
);

export const clearProducts = createAction(
  '[Product/API] Clear Products'
);
