import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    public username:string;
    public password:string;
    public verifycode:string;

    //public url = "/fire-auth/login";
    public url = "http://115.159.114.116:8082/fire-auth/login";
    public headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});

    //内网
    //public img_src = "http://10.78.116.122:8000/fire-auth/code.do";
    //外网
    public img_src = "http://115.159.114.116:8082/fire-auth/code.do"; 


    constructor(private router:Router, private http: Http) {

    }

    ngOnInit(){
      
    };


    onSubmit() {
      // let params = new URLSearchParams();
      // params.set('USERNMAE', this.username);
      // params.set('PASSWORD', this.password);
      // params.set('CHECKCODE', this.verifycode);
      // console.log("params = " + params);

      //this.router.navigate(['/main/1']);

      this.http.post(this.url,{"USERNAME":this.username,
        "PASSWORD":this.password,
        "CHECKCODE":this.verifycode},
        {headers: this.headers})
        .map(res => res.json())
        .subscribe(
          data=>{
            //console.log("成功-->登录界面");
            //console.log("res = " + data);
            //console.log("res.Success = "+ data.Success);
            //console.log("res.Datas = "+ JSON.stringify(data.Datas));
            if(true == data.Success) {
              this.router.navigate(['/main/1']);
            }

          },
          err => {
            //登陆失败也跳转
            this.router.navigate(['/main/1']);
            console.log("错误");
            console.log(err);  
          },
          () => {
            console.log("完成");
            console.log('Login Complete');
          }
        );

    }

    onClickImg() {
      console.log("-->onClickImg()")
      this.img_src = "http://115.159.114.116:8082/fire-auth/code.do"+ Math.random();
    }


}
