import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PaginationModule } from 'ng2-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileUploadModule } from 'ng2-file-upload';


import { NavComponent } from './nav.component';
import { DashboardComponent } from './dashboard.component';
import { lineChartsComponent } from '../charts/lineCharts/lineCharts.component';
import { pieChartsComponent } from '../charts/pieCharts/pieCharts.component';
import { DatatableComponent } from '../tables/datatable/datatable.component';
import { BootstrapComponent } from '../bootstraps/static/bootstrap.component';
import { PluginComponent } from '../bootstraps/plugin/plugin.component';

import { GaodeMapComponent } from '../charts/map/gaode-map.component';
import { AmapComponent } from '../charts/map/amap/amap.component';
import { IndoorComponent } from "../indoor/indoor.component";
import { PopoverModule } from 'ng2-popover'
import { Ng2Echarts } from 'ng2-echarts';
import { ProjectManageComponent } from "../project-manage/project-manage.component";
import { ProjectManageService } from "../project-manage/project-manage.service";

const tablesRoutes:Routes = [
	{
		path:'main/:id',
		component:NavComponent,
		children:[
			{path:'', component:DashboardComponent},
			{path:'dashboard', component:DashboardComponent},
			{path:'lineCharts', component:lineChartsComponent},
			{path:'pieCharts', component:GaodeMapComponent},
			{path:'datatable', component:DatatableComponent},
			{path:'bootstrap-static', component:BootstrapComponent},
			{path:'project-manage', component:ProjectManageComponent}
		]
	}
]


@NgModule ({
	imports:[
		FormsModule,
		CommonModule,
		RouterModule.forChild (tablesRoutes),
		ChartsModule,
		PaginationModule.forRoot (),
		Ng2SmartTableModule,
		FileUploadModule,
		PopoverModule
	],
	declarations:[
		NavComponent,
		DashboardComponent,
		lineChartsComponent,
		pieChartsComponent,
		DatatableComponent,
		BootstrapComponent,
		PluginComponent,
		AmapComponent,
		GaodeMapComponent,
		IndoorComponent,
		Ng2Echarts,
		ProjectManageComponent
	],
	providers:[
		ProjectManageService
	]
})
export class DashboardModule{
}
