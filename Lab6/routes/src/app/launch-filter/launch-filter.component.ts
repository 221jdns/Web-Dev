import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-launch-filter',
  imports: [],
  templateUrl: './launch-filter.component.html',
  styleUrl: './launch-filter.component.css'
})
export class LaunchFilterComponent {
  @Output() launches = new EventEmitter<any>();
  @Input() data!: any;

  message(){
    this.launches.emit("sm");
  }
  fm(){
    console.log('geeeeeee');
    console.log(this.data);
  }


}
