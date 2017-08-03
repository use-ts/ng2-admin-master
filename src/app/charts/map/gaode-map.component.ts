import { Component, OnInit } from '@angular/core';
import { AmapComponent } from './amap/amap.component';

@Component({
  selector: 'app-gaode-map',
  templateUrl: './gaode-map.component.html',
  styleUrls: ['./gaode-map.component.scss'],
})
export class GaodeMapComponent implements OnInit {
  constructor() { }
  ngOnInit() {

  }

  public chartData = {
    theme: '',
    event: [
      {
        type: "click",
        cb: function (res) {
          console.log(res);
        }
      }
    ],
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 335,
        name: '直接访问'
      }, {
        value: 310,
        name: '邮件营销'
      }, {
        value: 234,
        name: '联盟广告'
      }, {
        value: 135,
        name: '视频广告'
      }, {
        value: 1548,
        name: '搜索引擎'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
}