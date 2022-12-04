import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {
  //En este componente, permitimos que nos puedan pasar como atributo "usuario", una variable de tipo String.
  @Input() usuario: string;
  ngOnInit(): void {}
}
