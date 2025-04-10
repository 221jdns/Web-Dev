import { Component } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../../company';
import { NgFor } from '@angular/common';
import { OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-company',
  imports: [NgFor],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{
  companies: Company[] = []
  constructor(private service: ServiceService){

  }

  ngOnInit(): void {
    this.service.getCompanies().subscribe(
      {
        next: (data) => this.companies = data,
        error: (err) => console.error('Ошибка при получении вакансии' , err)
      }
    )
  }



}
