import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  private apiUrl = 'http://localhost:3000';

  constructor() { }

  async userLogin(data: any) {
    try {
      const response = await axios.post(`${this.apiUrl}/users/auth`, data);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      throw error;
    }
  }
}
