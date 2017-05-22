import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostTableService } from '../services/post-table.service';
import { Input} from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

@Component({
  selector: 'app-charts',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  para = "";
  // @Input() dataURL:string="src/mock-data/postlist-mock.json";
  @Input() dataURL:string="src/mock-data/firelist-mock.json";
  public postList:Array<any>;
  //相对地址
  //public url = "/fire-saas/DeviceEvent/getList";
  //绝对地址
  public url = "/fire-saas/DeviceEvent/getList";
  public headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});

  constructor (
    private parent: NavComponent,
    private route: ActivatedRoute,
    private router: Router,
    public postTableService: PostTableService,
    private http: Http
  ) {}

  ngOnInit(){
    this.parent.setActiveByPath(this.parent.dashboard,"");
    this.para = this.parent.para;

    this.postTableService.getPostTable(this.dataURL).subscribe(
        res=>{
          console.log(res);
          this.postList=res.rows;
          console.log("postList =" + this.postList.length);
        },
        error => {console.log(error)},
        () => {}
      );


    //请求SaaS数据
    // this.http.post(this.url,{},
    //     {headers: this.headers})
    //     .map(res => res.json())
    //     .subscribe(
    //       data=>{
    //         console.log("成功-->火警监控");
    //         console.log("res = " + data);
    //         console.log("res.Success = "+ data.Success);
    //         console.log("res.Datas.tatal = "+ data.Datas.total);
    //         //console.log("res.Datas.rows = "+ JSON.stringify(data.Datas.rows));
    //         this.postList=data.Datas.rows;
    //         //postList[1].fireDeviceEventList = 
    //         // [{"eventId":35,"createTime":1494414353000,"eventTakeTime":null,"confirmTime":null,
    //         // "confirmFlag":"Y","messageTypeId":1000001,"deviceId":5333,"messageSmallType":"EVT_FIRE",
    //         // "messageBigType":"ALM","messageTypeDetail":"火警"}]
    //         console.log("postList[1].fireDeviceEventList = "+ JSON.stringify(this.postList[1].fireDeviceEventList));

    //       },
    //       err => {
    //         console.log("错误");
    //         console.log(err);  
    //       },
    //       () => {
    //         console.log("完成");
    //         console.log('Login Complete');
    //       }
    //     );
  
};

    onClickCell() {
      console.log("-->onClickCell()");
      //this.router.navigate(['/main/1']);

      //this.parent.setActiveByPath("tables", this.parent.datatable);
      //this.parent.changeChildNavStatis("tables", this.parent.datatable);
      this.router.navigate(['/detail']);




    }

}
