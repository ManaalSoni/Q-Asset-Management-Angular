import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AssetViewComponent } from 'src/app/Components/asset-view/asset-view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public matDialog: MatDialog,) { }

  ngOnInit() {
  }

  is_superuser = localStorage.getItem('is_superuser')

}
