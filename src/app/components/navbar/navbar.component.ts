import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavScrolled: boolean = false;
  isDarkMode = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavScrolled = scrollY > 50;
  }

    toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}
