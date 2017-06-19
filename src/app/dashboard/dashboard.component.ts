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
	//用户是否配置防火区域
	public isConfig:boolean;
	public isBlank:boolean;
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
			durationTime:'25s',
			diviceCode:'G64N1L1D1'
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
			durationTime:'25s',
			diviceCode:'G64N1L1D2'
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
			durationTime:'25s',
			diviceCode:'G64N1L1D3'
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
			durationTime:'25s',
			diviceCode:'G64N1L1D4'
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
			durationTime:'25s',
			diviceCode:'G64N1L2D1'
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
			durationTime:'25s',
			diviceCode:'G64N1L2D2'
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
			durationTime:'25s',
			diviceCode:'G64N1L2D3'
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
			durationTime:'25s',
			diviceCode:'G64N1L2D4'
		}
	];


	ngOnInit (){
		console.log ("Dashboard-->ngOnInit");
		this.condition1 = true;
		this.condition2 = false;
		// this.parent.setActiveByPath (this.parent.dashboard, "");
		this.para = this.parent.para;
		//请求SaaS数据，火警监控接口
		this.getFireData();
	};

	public getFireData():void {
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
					//是否配置了区域
					// if(this.postList_dashboard[0].buildWithFireEvent[0].buildName == "") {
					// 	this.isConfig = false;
					// }else{
					 	this.isConfig = true;
					// }
					this.cellNmuber = data.Datas.total;
					if(this.cellNmuber === 0) {
						this.isBlank = true;
					}else{
						this.isBlank = false;
					}
					this.eventNumber = data.Datas.rows.totalFireEvent;
					//监听observable对象
					let disposable = this.postTableService.getPostTable ("")
						.subscribe (
							res =>{
								//console.log("监听observable对象:" +res);
								console.log ("监听observable对象-->res.Datas.rows:" + JSON.stringify (JSON.parse (res).Datas));

								//下面的解析--Web State
								let tempData = JSON.parse (res).Datas;
								console.log ("监听observable对象-->res.Datas.rows:" + JSON.stringify (tempData));

								if (!('rows' in tempData)){
									//修改后的数据
									let deviceCode = tempData.deviceCode;
									let confirmFlag = tempData.confirmFlag;
									console.log('监听observable对象-->修改 ConfirmFlag: deviceCode : '+deviceCode+"  confirmFlag :"+confirmFlag);
									//CR：用户按下复位键清除，重新刷新界面

									for (let eventItem of this.eventItems){
										if (eventItem.diviceCode===deviceCode){
											eventItem.confirmFlag = confirmFlag;
											console.log ("监听observable对象-->修改成功 ConfirmFlag：deviceCode :"+deviceCode+ "  confirmFlag :" + eventItem.confirmFlag);
										}
									}
									if(confirmFlag==='C'||confirmFlag==='R'||confirmFlag==='A') {
										console.log ("用户按下复位键清除，重新刷新界面");
										disposable.unsubscribe();
										this.getFireData();
										//实时更新列表状态
										this.getFireDataDetail();
									}
								} else {
									//先不加到列表里
									//this.postList_dashboard.push (JSON.parse (res).Datas.rows[0]);
									console.log ("有新数据上报，重新刷新界面");
									disposable.unsubscribe();
									this.getFireData();
									//实时更新列表状态
									this.getFireDataDetail();

									this.updateIndoorEventStatus(tempData);
									
								}								
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
	}
	public onClickView():void {
		console.log ("-->onClickView()");
	}

	//请求SaaS数据，消息详情接口
	public getFireDataDetail():void {
		this.http.post (this.url_detail, {"confirmFlag":["N","A"]},
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
	}


	//add by Shoudong/H157925
	//请求室内平面图的初始状态
	public getFireIndoorInitialDetail(cellId:number):void{
		console.log("test getFireIndoorInitialDetail");
		this.http.post (this.url_dashboard, {"cellId":cellId},
			{headers:this.headers})
			.map (res => res.json ())
			.subscribe (
				data =>{
					console.log ("getFireIndoorInitialDetail-->res.Datas.rows:" + JSON.stringify (data));

					this.updateIndoorEventStatus(data.Datas);
				},
				err =>{
					console.log ("getFireIndoorInitialDetail 室内平面图初始化");
					console.log (err);
				},
				() =>{
					console.log (" getFireIndoorInitialDetail 室内平面图初始化");
				}
			);
	}


	//add by Shoudong/H157925
	//更新火警详情页面数据
	private updateIndoorEventStatus(res:any):void{
		var list = res.rows;
		for (let cellItem of list){
			//嵌套解析
			for (let FireData of cellItem.buildWithFireEvent){
				let cellName:string = FireData['cellName'];
				for (let fireDeviceEventList of FireData.fireDeviceEventList){
					let deviceCode = fireDeviceEventList.deviceCode;
					let deviceLabel = fireDeviceEventList.deviceLabel;
					console.log('updateIndoorEventStatus-->收到新的 Event事件 ：the device code :'+deviceCode);
					for (let fireDeviceEventList02 of fireDeviceEventList.fireDeviceEventList){
						let deviceId = fireDeviceEventList02.deviceId;
						for (let eventItem of this.eventItems){
							if (eventItem.deviceId===deviceId){
								eventItem.createTime = fireDeviceEventList02['createTime'];
								eventItem.deviceLabel = deviceLabel;
								eventItem.location = cellName + eventItem.deviceLabel;
								eventItem.durationTime = fireDeviceEventList02['duration'];
								eventItem.eventId = fireDeviceEventList02['eventId'];
								eventItem.eventTakeTime = fireDeviceEventList02['eventTakeTime'];
								eventItem.confirmTime = fireDeviceEventList02['confirmTime'];
								eventItem.confirmFlag = fireDeviceEventList02['confirmFlag'];
								eventItem.diviceCode = deviceCode;
								console.log ("updateIndoorEventStatus-->收到新的 Event事件： 修改后的的eventItem：the device code : "+deviceCode + " deviceID : "+ deviceId);
								break;
							}
						}
					}
				}
			}
		}
	}

	public onClickCell():void {
		//add by h157925 这里需要传入 CellID
		this.getFireIndoorInitialDetail(100);
		//请求SaaS数据，消息详情接口
		this.getFireDataDetail();
		console.log ("-->onClickCell()");
		this.condition1 = false;
		this.condition2 = true;
	}

	public onClickBack():void {
		console.log ("-->onClickBack()");
		this.condition1 = true;
		this.condition2 = false;
	}

	public changeItemColor(flag:string):boolean {
		if(flag==='N')
			return true;
		else return false;
	}

}
