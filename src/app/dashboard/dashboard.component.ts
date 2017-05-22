import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostTableService } from '../services/post-table.service';
import { Input} from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

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
  public postList:Array<any>;
  //相对地址
  //public url = "/fire-saas/DeviceEvent/getList";
  //绝对地址
  public url = "http://115.159.114.116:8082/fire-saas/DeviceEvent/getList";
  public headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});

  constructor (
    private parent: NavComponent,
    private route: ActivatedRoute,
    private router: Router,
    public postTableService: PostTableService,
    private http: Http
  ) {}

  ngOnInit(){

    this.condition1 = true;
    this.condition2 = false;    
    this.parent.setActiveByPath(this.parent.dashboard,"");
    this.para = this.parent.para;

    //本地Mock的数据
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
    this.http.post(this.url,{},
        {headers: this.headers})
        .map(res => res.json())
        .subscribe(
          data=>{
            console.log("成功-->火警监控");
            console.log("res = " + data);
            console.log("res.Success = "+ data.Success);
            console.log("res.Datas.tatal = "+ data.Datas.total);
            //console.log("res.Datas.rows = "+ JSON.stringify(data.Datas.rows));
            this.postList=data.Datas.rows;
            //postList[1].fireDeviceEventList = 
            // [{"eventId":35,"createTime":1494414353000,"eventTakeTime":null,"confirmTime":null,
            // "confirmFlag":"Y","messageTypeId":1000001,"deviceId":5333,"messageSmallType":"EVT_FIRE",
            // "messageBigType":"ALM","messageTypeDetail":"火警"}]
            console.log("postList[1].fireDeviceEventList = "+ JSON.stringify(this.postList[1].fireDeviceEventList));

          },
          err => {
            console.log("错误");
            console.log(err);  
          },
          () => {
            console.log("完成");
            console.log('Login Complete');
          }
        );
  
};

    onClickCell() {
      console.log("-->onClickCell()");
      //this.router.navigate(['/main/1']);

      //this.parent.setActiveByPath("tables", this.parent.datatable);
      //this.parent.changeChildNavStatis("tables", this.parent.datatable);

      //this.router.navigate(['/detail']);
      this.condition1 = false;  
      this.condition2 = true;
    }



  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }


  settings = {
    columns: {
      property1: {
        title: '控制器发生时间'
      },
      property2: {
        title: '系统收到时间'
      },
      property3: {
        title: '持续时长'
      },
      property4: {
        title: '处理状态'
      },
      property5: {
        title: '设备类型'
      },
      property6: {
        title: '设备名称'
      },
      property7: {
        title: '设备编号'
      },
      property8: {
        title: '设备位置'
      },
      property9: {
        title: '系统'
      },
      property10: {
        title: '信息描述'
      }
    },
    mode : "inline",
    delete:{
      confirmDelete : true
    }
  };

  data = [
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    },
    {
      property1: "2017/1/21 13:56:23",
      property2: "2017/1/21 13:57:23",
      property3: "1分22秒",
      property4: "未处理",
      property5: "烟感探测器",
      property6: "两层烟感",
      property7: "L2.171",
      property8: "3号楼402客房",
      property9: "火灾自动报警系统",
      property10: "连续报警"
    }
  ];

  onDeleteConfirm(event): void {
    console.log("delete function");
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }/**/

  }

}
