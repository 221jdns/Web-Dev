import { Component } from '@angular/core';
import { RegisterserviceService } from '../../regser/registerservice.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = ''
  password: string = ''

  constructor(private regservice: ServiceService, private router: Router){

  }
  

  onSubmit(){

    const data = { username: this.username, password: this.password };

    this.regservice.postRegistration(data).subscribe(
      (response) => {
        console.log(response)
        this.router.navigate(['/login']);
      },
      (error) =>{
        console.error("Ошибка регистрации");

      }

    )
  }

  onPut(){
    this.router.navigate(['/login']);
  }
}
