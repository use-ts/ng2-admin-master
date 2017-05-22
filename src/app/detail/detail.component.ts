import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;

  constructor() { }

  ngOnInit() {
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

