import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';

import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../../store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../store/effects/auth.effects';

import { LoginComponent } from './components/login/login.component';
import { AuthLinksComponent } from './components/auth-links/auth-links.component';

const components = [
  LoginComponent,
  AuthLinksComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [components]
})
export class AuthModule { }
