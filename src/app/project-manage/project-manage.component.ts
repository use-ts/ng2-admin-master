/**
 * Created by sundong on 2017/8/1.
 */


import { Component, OnInit, Input } from "@angular/core";
import { ProjectManageService } from "./project-manage.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ProjectInfo } from "./project-info";
@Component({
	selector:'project-manage',
	templateUrl:'project-manage.component.html',
	styleUrls:['project-manage.component.css']
})

export class ProjectManageComponent implements OnInit {

	@Input() dataURL:string="app/project-info-mock.json";
	public projects:Array<ProjectInfo>;

	constructor(
		public router: Router,
		public activeRoute: ActivatedRoute,
		public projectManageService:ProjectManageService
	) {
		this.projects = new Array();
	}

	ngOnInit(){
		this.getProjectInfoForDemo();
	}

	public getProjectInfo(){
		return this.projectManageService.getProjectInfo(this.dataURL).subscribe(
			res=>{
				console.log(res);
				for (let item of res){
					let project = new ProjectInfo();
					project.id = item['id'];
					project.date = item['data'];
					project.name = item['name'];
					project.address_str = item['address'];
					project.build_type = item['build-type'];
					project.using_type = item['using-type'];
					project.monitor_type = item['monitor-type'];
					project.fire_type = item['fire-type'];
					project.build_struct = item['build-struct'];
					this.projects.push(project);
				}
			},
			error => {
				console.log(error)
			},
			() => {}
		)
	}


	public getProjectInfoForDemo(){
		for (var i = 0; i < 20;i++){
			let project = new ProjectInfo();
			project.id = "PXM-13409880";
			project.date = "2017/06/14";
			project.name = "南京绿地理想城";
			project.address_str = "南京市黄埔路980号";
			project.build_type = "聚众场所";
			project.using_type = "商场";
			project.monitor_type = "一级";
			project.fire_type = "一级";
			project.build_struct = "混合";
			this.projects.push(project);
		}
	}
}
