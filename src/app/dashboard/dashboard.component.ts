import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostTableService } from '../services/post-table.service';
import { Input} from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  para = "";
  @Input() dataURL:string="src/mock-data/postlist-mock.json";
  public postList:Array<any>;

  constructor (
    private parent: NavComponent,
    private route: ActivatedRoute,
    private router: Router,
    public postTableService: PostTableService
  ) {}

  ngOnInit(){
    this.parent.setActiveByPath(this.parent.dashboard,"");
    this.para = this.parent.para;

    this.postTableService.getPostTable(this.dataURL).subscribe(
        res=>{
          console.log(res);
          this.postList=res.items;
          console.log("postList =" + this.postList.length);
        },
        error => {console.log(error)},
        () => {}
      );
  };



}
