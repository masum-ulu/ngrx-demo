import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from '../auth/guards/admin.guard';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent
    },
    {
        path: 'list',
        component: ProductListComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'detail/:id',
        component: ProductDetailComponent
    },
    {
        path: 'add',
        component: ProductAddComponent,
        canActivate: [AdminGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule { }
