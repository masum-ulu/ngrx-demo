import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Product } from '../models/product';
import * as ProductActions from './product.actions';

export const productsFeatureKey = 'products';

export interface State extends EntityState<Product> {
  // additional entities state properties
  error: any;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null
});


export const reducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, action) =>
    adapter.setAll(action.products, state)
  ),
  on(
    ProductActions.loadProductSuccess,
    ProductActions.addProductSuccess,
    (state, action) => adapter.addOne(action.product, state)
  ),
  on(ProductActions.upsertProductSuccess, (state, action) =>
    adapter.upsertOne(action.product, state)
  ),
  on(ProductActions.deleteProduct,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ProductActions.clearProducts,
    state => adapter.removeAll(state)
  ),
  on(
    ProductActions.upsertProductFailure,
    ProductActions.loadProductsFailure,
    ProductActions.addProductFailure,
    ProductActions.loadProductFailure,
    ProductActions.deleteProductFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
