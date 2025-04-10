import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../vacancy';
import { VacserService } from '../../vacancyservice/vacser.service';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-vacancylist',
  imports: [NgFor, NgIf],
  templateUrl: './vacancylist.component.html',
  styleUrl: './vacancylist.component.css'
})
export class VacancylistComponent implements OnInit{
  vacancies: Vacancy[] = [];

  constructor(private ser:ServiceService){

  }

  ngOnInit(): void {
    this.ser.getVacancies().subscribe(
      {
        next: (data) => this.vacancies = data,
        error: (err) => console.error('Ошибка при получении вакансии' , err)
      }
    );
  }



}
