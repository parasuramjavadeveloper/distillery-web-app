import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IndentService } from 'src/app/services/apiServices/indent.service';


@Component({
  selector: 'app-add-special-indent',
  templateUrl: './add-special-indent.component.html',
  styleUrls: ['./add-special-indent.component.css']
})
export class AddSpecialIndentComponent implements OnInit {

  indentModel: any = {};

  constructor(private transport:MatDialog,private indentService: IndentService) { }

  ngOnInit() {
  }
 /*  adding(){
    this.transport.open(ShipmentTransportOfsComponent);
  } */

  saveSpecialIndent(){

  }
}
