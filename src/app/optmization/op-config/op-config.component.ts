import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-op-config',
  templateUrl: './op-config.component.html',
  styleUrls: ['./op-config.component.scss']
})



export class OpConfigComponent implements OnInit {
  select = ["select1", "select2", "select3"];
  constructor() { }

  ngOnInit() {
  }

}
