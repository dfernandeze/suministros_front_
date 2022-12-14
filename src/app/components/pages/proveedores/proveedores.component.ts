import { ProveedoresService } from './../../../services/proveedores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {


  constructor(private service: ProveedoresService) { }
  proveedor:any[] = []
  ngOnInit(): void {
    this.service.getProviders().subscribe(data => {
      this.proveedor = data;
      console.log(this.proveedor)
    });
  }

}
