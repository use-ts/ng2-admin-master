/**
 * Created by sundong on 2017/8/1.
 */


import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";


@Injectable()
export class ProjectManageService{
	constructor(public http: Http) { }

	public getProjectInfo(dataUrl:string){
		return this.http.get(dataUrl).map((res:Response)=>res.json()).catch((error:any) => Observable.throw(error || "Server error"));
	}
}