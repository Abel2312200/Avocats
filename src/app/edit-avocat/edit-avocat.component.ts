import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-avocat',
  templateUrl: './edit-avocat.component.html',
  styleUrls: ['./edit-avocat.component.css']
})
export class EditAvocatComponent implements OnInit {
  public avocatForm !: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.avocatForm=this.fb.group({
        nom:['', Validators.required],
        prenoms:['', Validators.required],
        ville:[''],
        pays:[''],
        prixHeure:['', Validators.required]
      });
  }

}
