import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DisAvocatComponent } from '../dis-avocat/dis-avocat.component';
import { IAvocat } from '../liste-avocats/Avocat';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-info-avocats',
  templateUrl: './info-avocats.component.html',
  styleUrls: ['./info-avocats.component.css']
})
export class InfoAvocatsComponent implements OnInit {

  public avocat : IAvocat|undefined;
  constructor(public avocatS:SharedService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.avocat=this.avocatS.getAvocat();
  }
  openDialog() {
    const dialogRef = this.dialog.open(DisAvocatComponent);

    dialogRef.afterClosed().subscribe();
  }

}
