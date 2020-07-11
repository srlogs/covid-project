import { Component, OnInit } from '@angular/core';
import { DeathsService} from '../deaths.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

items : any;
  constructor(private deathsService : DeathsService) {
    this.deathsService.getAllDeaths().subscribe(
      data => {
        this.items = data;
        console.log(this.items)
      },
      err => console.log("error",err),
      () => console.log("finally")
    )
  }

  ngOnInit(): void {
  }

}
