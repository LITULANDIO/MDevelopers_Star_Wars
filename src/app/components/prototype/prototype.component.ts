import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.scss']
})
export class PrototypeComponent implements OnInit {

  starShips: any[] = [];

  constructor(public apiService: ApiService) {

   }
   
  ngOnInit(): void {
   this.apiService.getShips().subscribe(
     (data)=>{
       this.starShips = data['results'];
     },
     (error)=>{
       console.error(error);
     }
   );
}

}
