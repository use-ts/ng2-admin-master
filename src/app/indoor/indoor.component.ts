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
	@Input () eventItems:Array<WebsocketEventItem>;
	public EventItem:WebsocketEventItem;

	constructor (private el:ElementRef){
	}
	isShowPop(id:number){
		var item = this.getItemsByDeviceId(id);
		if (item === null){
			return false;
		}
		if (item.confirmFlag === 'N')
		{
			return true;
		}
		return false;
	}
	getItemsByDeviceId(id){
		return this.eventItems.find(x=>x.deviceId === id);
	}
	getConfimStr(){
		if (this.EventItem.confirmFlag === 'N'){
			return '未确认';
		} else {
			return '已确认';
		}
	}

	setEventItem(id:number){
		this.EventItem = this.eventItems.find(x=>x.deviceId === id);
	}
	ngOnInit (){
		this.EventItem =this.eventItems.find(x=>x.deviceId === 1);
	}

}
