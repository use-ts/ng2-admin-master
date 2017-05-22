import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing}        from './app.routing';


import {ChartsModule} from 'ng2-charts/ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import {AppComponent} from './app.component';
import {AnalysisComponent} from './module/view.analysis';
import {LoginComponent} from './login/login.component';
import {DashboardModule} from './dashboard/dashboard.module';

import { PostTableService } from './services/post-table.service';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
    LoginComponent,
    DetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule,
    DashboardModule,
    Ng2SmartTableModule
  ],
  providers: [
              {provide: LocationStrategy, useClass: HashLocationStrategy},
              PostTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
