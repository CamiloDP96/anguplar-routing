import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  template: '<h2>ID: {{ id }} </h2>',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  id: string = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') as string;
    })
  }
}
