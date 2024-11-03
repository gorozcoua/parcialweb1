import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafes-list',
  templateUrl: './cafes-list.component.html',
  styleUrls: ['./cafes-list.component.css']
})
export class CafesListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  blend: number = 0;
  origen: number = 0;


  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.calculateTypes();
    });
  }

  calculateTypes(): void {
    this.origen = this.cafes.filter(cafe => cafe.tipo.includes("Origen")).length;
    this.blend = this.cafes.filter(cafe => cafe.tipo.includes("Blend")).length;
  }
 
  ngOnInit() {
    this.getCafes();
  }

}
