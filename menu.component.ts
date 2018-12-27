import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // 1 depth
  depths1 = [
    {
      'url': 'page1',
      'text': 'page 1'
    },
    {
      'url': 'page2',
      'text': 'page 2'
    },
    {
      'url': 'page3',
      'text': 'page 3'
    }
  ]
  // 2 depth
  depths2 = [
    [
      {
        'url': 'page1_1',
        'text': 'page 1_1'
      },
      {
        'url': 'page1_2',
        'text': 'page 1_2'
      }
    ],
    [
      {
        'url': 'page2',
        'text': 'page 2'
      },
      {
        'url': 'page2',
        'text': 'page 2_1'
      }
    ],
    [
      {
        'url': 'page3',
        'text': 'page 3'
      },
      {
        'url': 'page3',
        'text': 'page 3_1'
      }
    ]
  ]
  constructor() { }

  ngOnInit() {
  }

}
