import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoAvocatsComponent } from '../info-avocats/info-avocats.component';
import { IAvocat } from '../liste-avocats/Avocat';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dis-avocat',
  templateUrl: './dis-avocat.component.html',
  styleUrls: ['./dis-avocat.component.css']
})
export class DisAvocatComponent implements OnInit {
  public avocat : IAvocat|undefined;
  constructor(  public dialog :MatDialog, public avocatS : SharedService) { }

  ngOnInit(): void {
    this.avocat=this.avocatS.getAvocat();
    }
    openInfo() {
      const dialogRef = this.dialog.open(InfoAvocatsComponent);

      dialogRef.afterClosed().subscribe();
    }
}
