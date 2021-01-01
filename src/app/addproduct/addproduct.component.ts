import { Component, OnInit, Output } from '@angular/core';
import {ConnectService} from '../connect.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private prodserv : ConnectService,
                public fobj :FormBuilder,
                private router:Router,
                ) { }

    ngOnInit(): void {}
    @Output() data :string;
  
    
    userForm= this.fobj.group(
    {
        name:['', Validators.required],
        category:['',Validators.required],
        tag : ['',Validators.required],
        price : ['',Validators.required],
        quantity :['',Validators.required],
        // activity : ['true',Validators.required]
    }
    )
    saveData()
    {
        this.prodserv.addProduct(this.userForm.value)
        .subscribe(
          data=>console.log("Success",data),
          error=>console.log("Error !!",error)
        )
        alert("Product Inserted");
        this.router.navigate(['/']);
    }
}



