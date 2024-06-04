import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonInput,  IonLabel, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})


export class LoginPage implements OnInit {


  user = {email: '', password: ''}

  constructor(private dataService: DataServiceService, ) { }

  ngOnInit() {

  }



  async login2() {
    console.log(this.user)
    if (this.user.email==='' || this.user.password==='') {
      console.log('falta usuario ou senha')
    }else{
      this.dataService.userLogin(this.user).then(()=>{
       console.log('entrou')
      })

    }




  }



}
