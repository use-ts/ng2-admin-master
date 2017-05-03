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

    public url = "/fire-auth/login";
    public headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});

    constructor(private router:Router, private http: Http) {

    }

    ngOnInit(){
      
    };


    onSubmit() {

      // this.router.navigate(['/main/1']);

      // let params = new URLSearchParams();
      // params.set('USERNMAE', this.username);
      // params.set('PASSWORD', this.password);
      // params.set('CHECKCODE', this.verifycode);
      // console.log("params = " + params);


      this.http.post(this.url,{"USERNAME":this.username,
        "PASSWORD":this.password,
        "CHECKCODE":this.verifycode},
        {headers: this.headers}).subscribe(
          res=>{
            console.log(res);
          },
          err => console.log(err),
          () => console.log('Register Complete'))




    }

}
