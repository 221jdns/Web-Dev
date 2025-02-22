import { Routes } from '@angular/router';
import { ProductComponentComponent } from './product-component/product-component.component';

export const routes: Routes = [
    {
        path:'category/:id',
        component:ProductComponentComponent
    },
];

