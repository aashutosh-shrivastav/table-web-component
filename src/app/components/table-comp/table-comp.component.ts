import { Component, OnChanges ,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.scss']
})
export class TableCompComponent implements OnInit {

  @Input() GridData:any
  @Input() ColData:any
  constructor() { }

  ngOnInit() {
  }

}
