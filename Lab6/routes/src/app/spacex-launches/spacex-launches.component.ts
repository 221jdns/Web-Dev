import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaunchFilterComponent } from '../launch-filter/launch-filter.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-spacex-launches',
  imports: [LaunchFilterComponent, CommonModule],
  templateUrl: './spacex-launches.component.html',
  styleUrl: './spacex-launches.component.css'
})
export class SpacexLaunchesComponent{
  receiveMessage!: any[];
  id!: number;

  spaceData?: any[];
  

  private url = 'https://api.spacexdata.com/v3/dragons';


  constructor(private http: HttpClient){
    console.log('Here');
    this.launchData().subscribe((resp) => {
      this.spaceData = resp;
      console.log(this.spaceData);
    });
  }

  launchData(): Observable<any>{
    return this.http.get<any>(this.url);
  }
  addData(){
    this.http.put<any>(`${this.url}`, this.receiveMessage);
  }

  receiveEvent(event: any){
    this.receiveMessage = event;
  }
}
