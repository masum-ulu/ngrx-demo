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
  on(ProductActions.loadProductsFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(ProductActions.addProduct,
    (state, action) => adapter.addOne(action.product, state)
  ),
  on(ProductActions.upsertProduct,
    (state, action) => adapter.upsertOne(action.product, state)
  ),
  on(ProductActions.addProducts,
    (state, action) => adapter.addMany(action.products, state)
  ),
  on(ProductActions.upsertProducts,
    (state, action) => adapter.upsertMany(action.products, state)
  ),
  on(ProductActions.updateProduct,
    (state, action) => adapter.updateOne(action.product, state)
  ),
  on(ProductActions.updateProducts,
    (state, action) => adapter.updateMany(action.products, state)
  ),
  on(ProductActions.deleteProduct,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ProductActions.deleteProducts,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ProductActions.clearProducts,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
