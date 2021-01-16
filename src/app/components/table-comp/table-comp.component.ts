import { Component, OnChanges ,Input} from '@angular/core';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.scss']
})
export class TableCompComponent implements OnChanges {

  @Input() GridData:any
  @Input() ColData:any
  constructor() { }

  ngOnChanges() {
  }

}
