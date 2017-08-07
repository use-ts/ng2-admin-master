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

//标准饼图
public optionCir = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['当日火警','一级故障']
    },
    calculable : true,
    series : [
        {
            name:'火警分析',
            type:'pie',
            radius : ['50%', '70%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : true
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center'
                    }
                }
            },
            data:[
                {value:335, name:'当日火警'},
                {value:1548, name:'一级故障'}
            ]
        }
    ]
};

  //标准折线图1
  public optionCur1 = {
   legend: {
        data:['报警趋势图']
    },
    calculable : true,
    tooltip : {
        trigger: 'axis',
        formatter: "火警数量 : <br/>{b}"
    },
    xAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}'
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisLine : {onZero: false},
            axisLabel : {
                formatter: '{value}'
            },
            boundaryGap : false,
            data : ['0', '10', '20', '30', '40', '50', '60', '70', '80']
        }
    ],
    series : [
        {
            name:'报警趋势图',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:[1, 2, 3, 4, 10, 20, 30, 40, 50]
        }
    ]
};
  //标准折线图2
  public optionCur2 = {
   legend: {
        data:['故障趋势图']
    },
    calculable : true,
    tooltip : {
        trigger: 'axis',
        formatter: "故障数量: <br/>{b}"
    },
    xAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}'
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisLine : {onZero: false},
            axisLabel : {
                formatter: '{value}'
            },
            boundaryGap : false,
            data : ['0', '10', '20', '30', '40', '50', '60', '70', '80']
        }
    ],
    series : [
        {
            name:'故障趋势图',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:[15, 50, 56.5, 46.5, 22.1, 2.5, 7.7, 55.7, 76.5]
        }
    ]
};


//标准条形图1
public optionLine1 = {
    title : {
        text: '火警高发排行'
    },
    tooltip : {
        trigger: 'axis'
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['1','2','3','4','5','6']
        }
    ],
    series : [
        {
            name:'火警',
            type:'bar',
            data:[234, 189, 156, 134, 98, 87]
        }
    ]
};

//标准条形图2
public optionLine2 = {
    title : {
        text: '故障高发排行'
    },
    tooltip : {
        trigger: 'axis'
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['1','2','3','4','5','6']
        }
    ],
    series : [
        {
            name:'故障',
            type:'bar',
            data:[234, 189, 156, 134, 98, 87]
        }
    ]
};
                    
                    
                


}