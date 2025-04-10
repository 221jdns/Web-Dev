import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-company-list',
  imports: [NgFor],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = []
  
  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => this.companies = data);
  }

  viewVacancies(companyId: number): void {
    this.router.navigate(['/vacancies', companyId]);
  }
}
