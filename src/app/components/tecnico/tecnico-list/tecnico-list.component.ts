import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnicos';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Marcklen Guimarães',
      cpf: '012-345-678-90',
      email: 'marcklen@teste.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '11/12/2022'
    },
    {
      id: 2,
      nome: 'Fulano de Tal',
      cpf: '012-345-678-90',
      email: 'fulano@suaempresa.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '11/12/2022'
    },
    {
      id: 3,
      nome: 'Cicrano de Tal',
      cpf: '012-345-678-90',
      email: 'cicrano@teste.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '11/12/2022'
    }
  ]
 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}