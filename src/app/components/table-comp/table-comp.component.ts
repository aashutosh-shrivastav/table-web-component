import { Component, OnChanges ,Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class TableCompComponent implements OnInit {

  @Input() GridData:any;
  @Input() ColData:any;
  @Input() name ="ashu";

  constructor() { }

  ngOnInit() {
  }

}
