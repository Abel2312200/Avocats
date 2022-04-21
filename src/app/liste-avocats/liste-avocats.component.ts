import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { InfoAvocatsComponent } from '../info-avocats/info-avocats.component';
import { IAvocat } from './Avocat';
import { ListeAvocatService } from './liste-avocats.service';
import { SharedService } from '../shared.service';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { DisAvocatComponent } from '../dis-avocat/dis-avocat.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { EditAvocatComponent } from '../edit-avocat/edit-avocat.component';
@Component({
  selector: 'app-liste-avocats',
  templateUrl: './liste-avocats.component.html',
  styleUrls: ['./liste-avocats.component.css']
})
export class ListeAvocatsComponent implements OnInit {
  public listeDesAvocats : IAvocat[]=[]
  public errorMsg: string | undefined ;
  @ViewChild('infoTrigger') infoTrigger: MatMenuTrigger|any;
  constructor(private dialog: MatDialog, private AvocatService : ListeAvocatService,  private avocatS : SharedService,private breakpointObserver: BreakpointObserver) {
  }
  ngOnInit(): void {
    this.AvocatService.getAvocats().subscribe(
      {
        next : listeDesAvocats => this.listeDesAvocats = listeDesAvocats ,
        error : err => this.errorMsg=err
      }
    )
  }
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Annuaire des avocats', cols: 2, rows: 2  }
        ];
      }

      return [
        { title: 'Annuaire des avocats', cols: 2, rows: 2 }
      ];
    })
  );

  openInfo(a : IAvocat){
    this.avocatS.setAvocat(a);
    const dialogRef = this.dialog.open(DisAvocatComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(() => this.infoTrigger.focus());;
  }
  openEdit(){
    const dialogRef = this.dialog.open(EditAvocatComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(() => this.infoTrigger.focus());;
  }

}
