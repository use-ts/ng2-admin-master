import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-charts',
  templateUrl: './nav.component.html',
  styleUrls:['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor (
    private route: ActivatedRoute,
    private router: Router
  ) {}

  para = '';

  public lineCharts = "";
  public pieCharts = "";
  public dashboard = "";
  public datatable = "";
  public bootstrap = "";
  public plugin = "";

  routers = [];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.para=params['id'];
    });

    this.lineCharts = "/main/"+this.para+"/lineCharts";
    this.pieCharts = "/main/"+this.para+"/pieCharts";
    this.dashboard = "/main/"+this.para+"/dashboard";
    this.datatable = "/main/"+this.para+"/datatable";
    this.bootstrap = "/main/"+this.para+"/bootstrap-static";
    this.plugin = "/main/"+this.para+"/project-manage";

    this.routers = [
      {
        href: this.pieCharts,
        name: "状态总览",
        type: false
      },
      {
        href: this.dashboard,
        name: "火警监控",
        type: false
      },
      {
        href: this.datatable ,
        name: "故障监控",
        type: false
      },
      {
        href: this.plugin,
        name: "项目管理",
        type: false
      }

    ];

  };

  setActiveByPath = function (path, childPath) {
    for (var i = 0; i < this.routers.length; i++) {
      if (this.routers[i].active) {
        this.routers[i].active = false;
        break;
      }
    }
    for (var i = 0; i < this.routers.length; i++) {
      var router = this.routers[i];
      if (router.href == path) {
        if (!router.active) {
          router.active = true;
          if (childPath != "") {
            for (var j = 0; j < router.child.length; j++) {
              var route = router.child[j];
              if (route.href == childPath) {
                route.active = true;
              }
            }
          }
        } else {
          router.active = false;
        }
      }
    }
  };
  
  // changeNavStatis = function (path) {
  //   for (var i = 0; i < this.routers.length; i++) {
  //     if (this.routers[i].active) {
  //       this.routers[i].active = false;
  //       break;
  //     }
  //   }
  //   for (var i = 0; i < this.routers.length; i++) {
  //     var router = this.routers[i];
  //     if (router.href == path) {
  //       router.active = true;
  //     }
  //   }
  // };
  // changeChildNavStatis = function (path, childPath) {
  //   for (var i = 0; i < this.routers.length; i++) {
  //     var router = this.routers[i];
  //     if (router.href == path) {

  //       for (var j = 0; j < router.child.length; j++) {
  //         var route = router.child[j];
  //         if (route.href != childPath) {
  //           route.active = false;
  //         } else {
  //           route.active = true;
  //         }
  //       }
  //     }

  //   }
  // };
  // getQueryString = function(name){
  //   var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  //   var r = window.location.search.substr(1).match(reg);
  //   if(r!=null)return  r[2]; return null;
  // }



}
