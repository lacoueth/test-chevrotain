import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() description: string;
  @Input() title: string;
  @Input() src: string;

  constructor() { }

  ngOnInit() {
  }

}