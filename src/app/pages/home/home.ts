import { Component, inject, OnInit, signal } from '@angular/core';
import { SeriesService } from '../../services/series.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  private seriesService = inject(SeriesService);
  series = signal<any[]>([]);

  ngOnInit() {
  this.seriesService.getAll().subscribe((data) => {
    this.series.set(data);
  });
}
}
