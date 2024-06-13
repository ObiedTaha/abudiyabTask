import { Component, OnInit } from '@angular/core';
import { Icard } from 'src/app/interfaces/icard';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  allData:Icard[]=[];
  constructor(private _DataService:DataService){}

  ngOnInit(): void {
    this._DataService.getData('ar').subscribe({
      next:(response)=>{
        // console.log(response.data);
        this.allData=response.data
      },
      error:(err)=>{
        // console.log(err);
        
      }
    })
  }

}
