import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Injectable()
export class PostTableService {
    public delURL: string = "";
    public toEditURL: string = "";
    public ws: any;
    
    constructor(public http: Http) {
    }

    public getPostTable(dataURL:string){
        // return this.http.get(dataURL)
        //   .map((res:Response) => res.json())
        //   .catch((error:any) => Observable.throw(error || 'Server error'));
        return Observable.create(observer =>{
                //创建Webscket
                this.ws = new $WebSocket("ws://115.159.114.116:8082/fire-saas/websocket");
                this.ws.onOpen(msg=>{
                    console.log("websocket-->ws.onOpen");
                    //observer.next("ws.onOpen");
                });

                this.ws.onMessage(msg=>
                {
                    console.log("websocket-->ws.onMessage");
                    //console.log("websocket-->ws.onMessage" + JSON.stringify(msg.data));
                    //console.log("websocket-->ws.onMessage" + msg.data);
                    observer.next(msg.data);
                });
                this.ws.onClose(msg=>
                {
                    console.log("websocket-->ws.onClose");
                    this.ws.reconnect();
                });
                this.ws.onError(msg=>
                {
                    console.log("websocket-->ws.onError");
                    this.ws.reconnect();
                });
            }
        )

    }

    public del(postId: number):Observable<any>{
        return this.http.delete(this.delURL)
            .map((res: Response) => res.json());
    }

    public toEdit(postId: number):Observable<any>{
        return this.http.get(this.toEditURL)
            .map((res: Response) => res.json());
    }
}