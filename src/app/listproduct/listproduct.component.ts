import { Component, OnInit } from '@angular/core';
import {ConnectService} from '../connect.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

    Products  = [];
    constructor(private prodDetails : ConnectService) { }

    ngOnInit(): void {
        this.prodDetails.viewProducts()
        .subscribe(
          data=>{
            this.Products=data
          }
        );
        console.log(this.Products);
    }
}
