import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainListItem } from 'src/app/shared/models/list.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: MainListItem = null;
  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.details = this.route.snapshot.data.info;
  }
  get getFullName() {
    return `${this.details.country} ${ this.details.name}`;
  }
}
