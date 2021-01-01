import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

    private _addurl ="http://localhost:3000/product/post";
    private _viewurl="http://localhost:3000/product/get";

    constructor(private http : HttpClient) { }

    addProduct(prodInfo:Product)
    {
        return this.http.post<Product>(this._addurl , prodInfo);
    }

    viewProducts()
    {
        return this.http.get<any>(this._viewurl)
    }
}
