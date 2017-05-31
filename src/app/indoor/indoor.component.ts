/**
 * Created by sundong on 2017/5/24.
 */


import { Component, ViewChild, ElementRef, OnInit, HostListener, Input } from "@angular/core";
import { PopoverContent } from 'ng2-popover';
@Component ({
	selector:'app-indoor',
	templateUrl:'indoor.component.html',
	styleUrls:['indoor.component.css']
})

export class IndoorComponent implements OnInit{
	@Input () configurated:boolean;
	@Input () fireItem:string;
	@ViewChild('customPopover') customPopover: PopoverContent;

	constructor (private el:ElementRef){
	}
	isShowPop(item:string){
		return this.fireItem === item;
	}

	ngOnInit (){
	}

}
