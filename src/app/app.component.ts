import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NumService } from './num.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restapp-front';

  public nums: number[] = [];

  constructor(private numService: NumService){
  }

  public getNums(nums:string, sortOrder:boolean): void {

    var numbers = nums.split(',').map(function(item) {
      return parseInt(item, 10);
  });

    var numbersSortData = {
      numbers: numbers,
      order: sortOrder ? "ASC" : "DESC"
    }

    this.numService.getNums(numbersSortData).subscribe((response:any) => {
      this.nums = response;
    });
  }
}
