/**
 * Created by sundong on 2017/5/24.
 */


import { Component, ViewChild, ElementRef, OnInit, HostListener, Input } from "@angular/core";
import { PopoverContent } from 'ng2-popover';
import { WebsocketEventItem } from "./WebsocketEventItem";
@Component ({
	selector:'app-indoor',
	templateUrl:'indoor.component.html',
	styleUrls:['indoor.component.css']
})

export class IndoorComponent implements OnInit{
	@Input () configurated:boolean;
	@Input () EventItem:WebsocketEventItem;

	constructor (private el:ElementRef){
	}
	isShowPop(item:number){
		return this.EventItem.deviceId === item && this.EventItem.confirmFlag === 'N';
	}
	getConfimStr(){
		if(this.EventItem.confirmFlag === 'N'){
			return "未确认";
		} else {
			return '已确认';
		}
	}
	ngOnInit (){
	}

}
