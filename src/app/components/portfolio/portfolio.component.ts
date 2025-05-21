import { Component, OnInit } from '@angular/core';
import { Skills } from '../../interfaces/skills';
import { PortfolioService } from '../../services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
skills: Skills[] = []

  constructor(private skillsService:PortfolioService) {}

ngOnInit(): void {
  this.skills = this.skillsService.getSkills()
}

}
