import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestsService } from 'src/app/Services/ApiRequests/api-requests.service';


@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.css']
})
export class AssetViewComponent implements OnInit {

  constructor(public api: ApiRequestsService, private router: Router) { }
  assets : any = [];
  ngOnInit() {
    if(localStorage.getItem("is_superuser")=="true" && localStorage.getItem("is_active")=="true"){
      try{
          this.api.view_assets().subscribe(
            res => {
              this.assets = res
              console.log(res)
            },
            error => console.log(error)
          );
        }
      catch (error) {
        console.log(error);
      }
    }
    else {
      alert("Not authorised to view")
    }
    }

    navigate() {
      this.router.navigate(["/home"]);
    }
  }

