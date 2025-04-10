import { Component } from '@angular/core';
import { Vacancy } from '../../models/vacancy';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../../services/vacancy.service';
import { Company } from '../../models/company';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  imports: [NgFor],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {
  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private vacancyService: VacancyService) {}

  ngOnInit(): void {
    const company: Company = { id: Number(this.route.snapshot.paramMap.get('id')), name: '' };
    this.vacancyService.getVacancies(company).subscribe(data => this.vacancies = data);
  }

}
