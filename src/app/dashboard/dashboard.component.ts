import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostTableService } from '../services/post-table.service';
import { Input} from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket';

@Component({
  selector: 'app-charts',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','./info.component.css'],
})
export class DashboardComponent implements OnInit {

  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;

  public condition1:boolean;
  public condition2:boolean;
  public para = "";
  // @Input() dataURL:string="src/mock-data/postlist-mock.json";
  @Input() dataURL:string="src/mock-data/firelist-mock.json";
  public postList_dashboard:Array<any>;
  public postList_detail:Array<any>;
  //相对地址
  //public url = "/fire-saas/DeviceEvent/getList";
  //绝对地址
  //火警监控接口
  public url_dashboard = "http://115.159.114.116:8082/fire-saas/DeviceEvent/getRealTimeFireList";
  
  //消息详情接口
  public url_detail = "http://115.159.114.116:8082/fire-saas/DeviceEvent/getList";
  public headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});

  //websocket接受消息
  public data:any;

  constructor (
    private parent: NavComponent,
    private route: ActivatedRoute,
    private router: Router,
    public postTableService: PostTableService,
    private http: Http
  ) {
    //websocket连接
    let ws = new $WebSocket("ws://115.159.114.116:8082/fire-saas/websocket");
    ws.send("listening");

    ws.onOpen( msg=>{
      console.log("websocket-->ws.onOpen");
    });

    ws.onMessage( msg=>
    {
        this.data = JSON.stringify(msg.data);
        console.log("websocket-->ws.onMessage" + this.data);
    });
  }



  ngOnInit(){

    this.condition1 = true;
    this.condition2 = false;    
    this.parent.setActiveByPath(this.parent.dashboard,"");
    this.para = this.parent.para;

    //请求SaaS数据，火警监控接口
    this.http.post(this.url_dashboard,{},
        {headers: this.headers})
        .map(res => res.json())
        .subscribe(
          data=>{
            console.log("成功-->火警监控");
            console.log("res.Success = "+ data.Success);
            console.log("res.Datas.tatal = "+ data.Datas.total);
            console.log("res.Datas.rows = "+ JSON.stringify(data.Datas.rows));
            this.postList_dashboard=data.Datas.rows;
          },
          err => {
            console.log("火警监控错误");
            console.log(err);  
          },
          () => {
            console.log("火警监控完成");
            console.log('Login Complete');
          }
        );

    //本地Mock的数据
    // this.postTableService.getPostTable(this.dataURL).subscribe(
    //     res=>{
    //       console.log(res);
    //       this.postList=res.rows;
    //       console.log("postList =" + this.postList.length);
    //     },
    //     error => {console.log(error)},
    //     () => {}
    //   );
  
};

  onClickCell() {
        //请求SaaS数据，消息详情接口
     this.http.post(this.url_detail,{},
        {headers: this.headers})
        .map(res => res.json())
        .subscribe(
          data=>{
            console.log("成功-->消息详情");
            console.log("res.Success = "+ data.Success);
            console.log("res.Datas.tatal = "+ data.Datas.total);
            console.log("res.Datas.rows = "+ JSON.stringify(data.Datas.rows));
            this.postList_detail=data.Datas.rows;
          },
          err => {
            console.log("消息详情错误");
            console.log(err);  
          },
          () => {
            console.log("消息详情完成");
            console.log('Login Complete');
          }
        );

      console.log("-->onClickCell()");
        this.condition1 = false;  
        this.condition2 = true;
  }

}
