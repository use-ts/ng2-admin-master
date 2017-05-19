import {Component, OnInit} from '@angular/core';
import {NavComponent} from '../../dashboard/nav.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgClass} from '@angular/common';


@Component({
  selector: 'ng2-table',

  templateUrl: './datatable.component.html'
})
export class DatatableComponent implements OnInit {

  tableData = [
    {id: 1, username: 'Geek', age: 42, salary: 1234},
    {id: 2, username: 'TOM', age: 52, salary: 2345.64},
    {id: 3, username: 'King', age: 51, salary: 8888},
    {id: 4, username: 'QuEEN', age: 12, salary: 6663},
    {id: 5, username: 'JACK', age: 13, salary: 4567},
    {id: 6, username: 'KGC', age: 15, salary: 9870.123},
    {id: 7, username: 'rose', age: 23, salary: 3456.78},
    {id: 8, username: 'john', age: 78, salary: 6234},
    {id: 9, username: 'lily', age: 56, salary: 7234},
    {id: 10, username: 'hello', age: 34, salary: 8234},
    {id: 11, username: 'james', age: 58, salary: 9234}
  ];



  constructor(
      private parent:NavComponent,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.parent.setActiveByPath("tables", this.parent.datatable);

  };
  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;

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
