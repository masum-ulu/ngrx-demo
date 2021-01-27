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

/**
 * Load individual product
 */
export const loadProduct = createAction(
  '[Product Detail Component] Load Product',
  props<{ id: number }>()
);

export const loadProductSuccess = createAction(
  '[Product Effect] Load Product Success',
  props<{ product: Product }>()
);

export const loadProductFailure = createAction(
  '[Product Effect] Load Product Failure',
  props<{ error: any }>()
);

/**
 * Add individual product
 */
export const addProduct = createAction(
  '[Product Add Component] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product Effect] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[Product Effect] Add Product Failure',
  props<{ error: any }>()
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
