import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LockComponent } from './lock/lock.component';
import { ChartComponent } from '../components/chart/chart.component';
import { NavPillsComponent } from '../components/nav-pills/nav-pills.component';
import { NavPillComponent } from '../components/nav-pill/nav-pill.component';
import { DataTableComponent } from '../components/data-table/data-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ChartComponent,
    LoginComponent,
    RegisterComponent,
    LockComponent,
    HomeComponent,
    NavPillsComponent,
    NavPillComponent,
    DataTableComponent,
  ],
})
export class PagesModule {}
