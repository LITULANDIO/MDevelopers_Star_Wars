import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ApiService } from "../../services/api.service";
import { Starship } from "../../models/starship";

@Component({
  selector: "app-prototype-detail",
  templateUrl: "./prototype-detail.component.html",
  styleUrls: ["./prototype-detail.component.scss"]
})
export class PrototypeDetailComponent implements OnInit {
  constructor(public route: ActivatedRoute, public apiService: ApiService) {}

  public ship: Starship = {
    name: "",
    model: "",
    manufacturer: "",
    cost_in_credits: "",
    length: "",
    max_atmosphering_speed: "",
    crew: "",
    passengers: "",
    cargo_capacity: "",
    consumables: "",
    hyperdrive_rating: "",
    MGLT: "",
    starship_class: "",
    pilots: [],
    films: [],
    created: "",
    edited: "",
    url: ""
  };

  ngOnInit() {
    const ship_id = this.route.snapshot.params["id"];
    this.getDetailShip(ship_id);
  }

  //Recuperamos los datos por producto
  getDetailShip(id: string) {
    this.apiService.getShipById(id).subscribe(ship => (this.ship = ship));
    console.log(this.ship);
  }
}
