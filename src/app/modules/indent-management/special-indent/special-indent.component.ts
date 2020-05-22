import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddSpecialIndentComponent } from '../add-special-indent/add-special-indent.component';


@Component({
  selector: 'app-special-indent',
  templateUrl: './special-indent.component.html',
  styleUrls: ['./special-indent.component.css']
})
export class SpecialIndentComponent implements OnInit {

  constructor(private permissionServ: NgxPermissionsService, private router: Router,private addspecialindent:MatDialog) { }

  ngOnInit() {
    if (!(this.permissionServ.getPermission('home/module/indent') &&
    this.permissionServ.getPermission('home/indent-management/special-indent'))) {
      this.router.navigateByUrl('home/indent-management');
    }
  }

  addSpecialIndent(){
    this.addspecialindent.open(AddSpecialIndentComponent);
  }

}
