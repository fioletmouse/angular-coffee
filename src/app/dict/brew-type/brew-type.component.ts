import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brew-type',
  templateUrl: './brew-type.component.html',
  styleUrls: ['./brew-type.component.css']
})
export class BrewTypeComponent implements OnInit {

  title = 'Methods for Brewing Coffee';

  constructor() { }

  ngOnInit(): void {
  }

}
