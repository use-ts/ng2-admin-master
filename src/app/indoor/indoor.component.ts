/**
 * Created by sundong on 2017/5/24.
 */


import {
	Component, ElementRef, OnInit, Input, trigger, state, style, transition, animate,
	keyframes
} from "@angular/core";
import { WebsocketEventItem } from "./WebsocketEventItem";
@Component ({
	selector:'app-indoor',
	templateUrl:'indoor.component.html',
	styleUrls:['indoor.component.css'],
	animations:[
		trigger('itemState',[
			state('N', style({
				backgroundColor:'#eee'
				})),
			state('Y', style({
				backgroundColor:'#eee'
			})),
			state('C', style({
				backgroundColor:'#eee'
			})),
			transition('*=>N', [
				animate(500, keyframes([
					style({opacity:0}),
					style({opacity:1})

				]))
			]),
			transition('*=>Y', [
				animate('0.2s 10 ease-out', style({opacity:1}))
			]),
			transition('*=>C', [
				animate('0.2s 10 ease-out', style({opacity:1}))
			])
		])
	]
})

export class IndoorComponent implements OnInit{
	@Input () configurated:boolean;
	@Input () eventItems:Array<WebsocketEventItem>;
	public itemState:Array<any>;
	public EventItem:WebsocketEventItem;

	private hidden_01:boolean = false;

	constructor (private el:ElementRef){
	}

	isShowPop (id:number){
		var state = this.getItemsStateById(id);
		if (state==='N' || state==='A'){
			return true;
		}
		return true;
	}

	//状态1
	isState_01(id:number){
		var state = this.getItemsStateById(id);
		if (state == 'N'){
			return true;
		} else {
			return false;
		}
	}

	//状态2
	isState_02(id:number){
		var state = this.getItemsStateById(id);
		if (state == 'A'){
			return true;
		} else {
			return false;
		}
	}
	//状态3
	isState_03(id:number){
		var state = this.getItemsStateById(id);
		if (state == 'R' || state == 'C'){
			return true;
		} else {
			return false;
		}
	}

	getItemStatus(id:number){
		var item =this.eventItems.find (x => x.deviceId===id);
		return item.confirmFlag;
	}

	getItemsByDeviceId (id){
		return this.eventItems.find (x => x.deviceId===id);
	}
	//通过ID获取对应Item的状态
	getItemsStateById(id:number){
		var item = this.getItemsByDeviceId (id);
		if (item===null){
			return "";
		}
		return item.confirmFlag;
	}

	getConfimStr (){
		if (this.EventItem.confirmFlag==='N'){
			return '未确认';
		} else {
			return '已确认';
		}
	}

	setEventItem (id:number){
		this.EventItem = this.eventItems.find (x => x.deviceId===id);
	}

	ngOnInit (){
		this.itemState = this.eventItems;
		this.EventItem = this.eventItems.find (x => x.deviceId===5965);
		if (this.EventItem===null){
			this.EventItem = {
				eventId:0,
				eventTakeTime:'',
				confirmTime:'',
				confirmFlag:'Y',
				deviceId:5999,
				createTime:'2017-01-01',
				location:'南京霍尼韦尔',
				deviceLabel:'1L2.345',
				durationTime:'25s',
				diviceCode:'G64N1L2D4'
			};
		}
	}


}
