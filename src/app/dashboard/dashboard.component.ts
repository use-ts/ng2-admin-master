import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostTableService } from '../services/post-table.service';
import { Input } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { WebsocketEventItem } from "../indoor/WebsocketEventItem";

@Component ({
	selector:'app-charts',
	templateUrl:'./dashboard.component.html',
	styleUrls:['./dashboard.component.css', './info.component.css'],
})
export class DashboardComponent implements OnInit{

	public totalItems:number = 64;
	public currentPage:number = 4;
	public smallnumPages:number = 0;

	public condition1:boolean;
	public condition2:boolean;
	public para = "";
	//火警楼宇数量
	public cellNmuber:number;
	//火警数量
	public eventNumber:number;
	// @Input() dataURL:string="src/mock-data/postlist-mock.json";
	@Input () dataURL:string = "src/mock-data/firelist-mock.json";
	public postList_dashboard:Array<any>;
	public postList_detail:Array<any>;
	//相对地址
	//public url = "/fire-saas/DeviceEvent/getList";
	//绝对地址
	//火警监控接口
	public url_dashboard = "http://115.159.114.116:8082/fire-saas/DeviceEvent/getRealTimeFireList";

	//消息详情接口
	public url_detail = "http://115.159.114.116:8082/fire-saas/DeviceEvent/getList";
	public headers = new Headers ({'Content-Type':'application/json;charset=utf-8'});


	constructor (private parent:NavComponent,
	             private route:ActivatedRoute,
	             private router:Router,
	             public postTableService:PostTableService,
	             private http:Http){
	}

	public showConfig:boolean;
	public showItem:string;

	onClickFloor (floor:string){
		if (floor==='4'){
			this.showConfig = true;
		} else {
			this.showConfig = false;
		}
		this.showItem = '05';
	}

	public eventItems:Array<any> = [
		{
			eventId:0,
			eventTakeTime:'',
			confirmTime:'',
			confirmFlag:'Y',
			deviceId:5965,
			createTime:'2017-01-01',
			location:'南京霍尼韦尔',
			deviceLabel:'1L2.345',
			durationTime:'25s'
		},
		{
			eventId:0,
			eventTakeTime:'',
			confirmTime:'',
			confirmFlag:'Y',
			deviceId:5969,
			createTime:'2017-01-01',
			location:'南京霍尼韦尔',
			deviceLabel:'1L2.345',
			durationTime:'25s'
		},
		{
			eventId:0,
			eventTakeTime:'',
			confirmTime:'',
			confirmFlag:'Y',
			deviceId:5973,
			createTime:'2017-01-01',
			location:'南京霍尼韦尔',
			deviceLabel:'1L2.345',
			durationTime:'25s'
		},
		{
			eventId:0,
			eventTakeTime:'',
			confirmTime:'',
			confirmFlag:'Y',
			deviceId:5977,
			createTime:'2017-01-01',
			location:'南京霍尼韦尔',
			deviceLabel:'1L2.345',
			durationTime:'25s'
		},
		{
			eventId:0,
			eventTakeTime:'',
			confirmTime:'',
			confirmFlag:'Y',
			deviceId:5987,
			createTime:'2017-01-01',
			location:'南京霍尼韦尔',
			deviceLabel:'1L2.345',
			durationTime:'25s'
		},
		{
			eventId:0,
			eventTakeTime:'',
			confirmTime:'',
			confirmFlag:'Y',
			deviceId:5991,
			createTime:'2017-01-01',
			location:'南京霍尼韦尔',
			deviceLabel:'1L2.345',
			durationTime:'25s'
		},
		{
			eventId:0,
			eventTakeTime:'',
			confirmTime:'',
			confirmFlag:'Y',
			deviceId:5995,
			createTime:'2017-01-01',
			location:'南京霍尼韦尔',
			deviceLabel:'1L2.345',
			durationTime:'25s'
		},
		{
			eventId:0,
			eventTakeTime:'',
			confirmTime:'',
			confirmFlag:'Y',
			deviceId:5999,
			createTime:'2017-01-01',
			location:'南京霍尼韦尔',
			deviceLabel:'1L2.345',
			durationTime:'25s'
		}
	];

	ngOnInit (){
		console.log ("Dashboard-->ngOnInit");
		this.condition1 = true;
		this.condition2 = false;
		this.parent.setActiveByPath (this.parent.dashboard, "");
		this.para = this.parent.para;

		//请求SaaS数据，火警监控接口
		this.http.post (this.url_dashboard, {},
			{headers:this.headers})
			.map (res => res.json ())
			.subscribe (
				data =>{
					console.log ("成功-->火警监控");
					console.log ("res.Success = " + data.Success);
					console.log ("res.Datas.tatal = " + data.Datas.total);
					console.log ("res.Datas.rows = " + JSON.stringify (data.Datas));
					this.postList_dashboard = data.Datas.rows;
					this.cellNmuber = data.Datas.total;
					this.eventNumber = data.Datas.rows.totalFireEvent;


					//监听observable对象
					this.postTableService.getPostTable ("")
						.subscribe (
							res =>{
								//console.log("监听observable对象:" +res);
								console.log ("监听observable对象-->res.Datas.rows:" + JSON.stringify (JSON.parse (res).Datas.rows));
								//新数组[0]添加到原来数组尾部
								this.postList_dashboard.push (JSON.parse (res).Datas.rows[0]);

								data = JSON.parse (res).Datas.rows[0];
								let cellName:string = data['cellName'];
								let buildName = data.buildWithFireEvent[0].fireDeviceEventList.buildName;

								//嵌套解析
								for (let FireData of data.buildWithFireEvent){
									for (let fireDeviceEventList of FireData.fireDeviceEventList){
										for (let fireDeviceEventList02 of fireDeviceEventList.fireDeviceEventList){
											let deviceId = fireDeviceEventList02.deviceId;
											for (let eventItem of this.eventItems){
												if (eventItem.deviceId===deviceId){
													eventItem.createTime = fireDeviceEventList02['createTime'];
													eventItem.location = cellName + buildName;
													eventItem.deviceLabel = fireDeviceEventList02['deviceLabel'];
													eventItem.durationTime = fireDeviceEventList02['duration'];
													eventItem.eventId = fireDeviceEventList02['eventId'];
													eventItem.eventTakeTime = fireDeviceEventList02['eventTakeTime'];
													eventItem.confirmTime = fireDeviceEventList02['confirmTime'];
													eventItem.confirmFlag = fireDeviceEventList02['confirmFlag'];
													console.log ("监听observable对象-->修改后的的eventItem：" + JSON.stringify (eventItem));
													break;
												}
											}
										}
									}
								}


								// console.log ("监听observable对象-->单个火警：CellName:" + cellName + ' BuildName:' + buildName + ' deviceId:' + deviceId);
								// // var eventItem = this.eventItems.find(x=>x.deviceId === deviceId);
								// for (let eventItem of this.eventItems){
								// 	if (eventItem.deviceId === deviceId){
								// 		console.log ("监听observable对象-->修改前的的eventItem："+JSON.stringify(eventItem));
								// 		eventItem.createTime = FireData['createTime'];
								// 		eventItem.location = cellName + buildName;
								// 		eventItem.deviceLabel = FireData['deviceLabel'];
								// 		eventItem.durationTime = FireData['durationTime'];
								// 		eventItem.eventId = FireData['eventId'];
								// 		eventItem.eventTakeTime = FireData['eventTakeTime'];
								// 		eventItem.confirmTime = FireData['confirmTime'];
								// 		eventItem.confirmFlag = FireData['confirmFlag'];
								// 		console.log ("监听observable对象-->修改后的的eventItem："+JSON.stringify(eventItem));
								// 	}
								// }
							},
							error =>{
								console.log (error)
							},
							() =>{
							}
						);
				},
				err =>{
					console.log ("火警监控错误");
					console.log (err);
				},
				() =>{
					console.log ("火警监控完成");
					console.log ('Login Complete');
				}
			);


	};

	//视图模式切换
	onClickView() {
		console.log ("-->onClickView()");
	}

	onClickCell() {
		//请求SaaS数据，消息详情接口
		this.http.post (this.url_detail, {},
			{headers:this.headers})
			.map (res => res.json ())
			.subscribe (
				data =>{
					console.log ("成功-->消息详情");
					console.log ("res.Success = " + data.Success);
					console.log ("res.Datas.tatal = " + data.Datas.total);
					//console.log ("res.Datas.rows = " + JSON.stringify (data.Datas.rows));
					this.postList_detail = data.Datas.rows;
				},
				err =>{
					console.log ("消息详情错误");
					console.log (err);
				},
				() =>{
					console.log ("消息详情完成");
					console.log ('Login Complete');
				}
			);

		console.log ("-->onClickCell()");
		this.condition1 = false;
		this.condition2 = true;
	}

	onClickBack (){
		console.log ("-->onClickBack()");
		this.condition1 = true;
		this.condition2 = false;
	}

	changeItemColor (flag:string){
		return flag==='N';
	}

}
