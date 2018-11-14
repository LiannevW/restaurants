import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  header: HTMLElement;

  constructor() { }

  ngOnInit() {
    const header = document.querySelector('[toggle-link]');
    header.addEventListener('click', this.toggleMobileMenu.bind(this));
  }

  toggleMobileMenu() {
    const mobileMenu = document.querySelector('[togge-target]');
    mobileMenu.classList.toggle('is-visible');
  }

}
