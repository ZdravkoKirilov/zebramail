import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from '../app.component';
import {StoreModule} from '@ngrx/store';
import {MainRouterModule} from '../core-router.module';
import MainReducer from '../store/reducers/MainReducer';
import dashboard from '../dashboard/state/reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, FormsModule, HttpModule, StoreModule.provideStore({MainReducer, dashboard}),
    MainRouterModule
  ],
  providers: []
})
export class CoreModule {}