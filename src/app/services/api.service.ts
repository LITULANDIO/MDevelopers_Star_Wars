import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(public http: HttpClient) {}

  // Método para recuperar todos lo datos de las naves
  getShips() {
    return this.http.get(`https://swapi.co/api/starships/`);
  }
  // Método para recuperar los datos por nave
  getShipById(id: string) {
    return this.http.get(`https://swapi.co/api/starships/${id}/`);
  }
}
