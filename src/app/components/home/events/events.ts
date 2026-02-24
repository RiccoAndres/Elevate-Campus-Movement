import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-events',
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule
  ],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events implements OnInit, OnDestroy{

  public contents: string[] = [
    'Elevate Saturdays',
    'Sunday Service',
    'Unite 2026'
  ];

  private intervalId: any;
  public selectedIndex = 0;

  constructor (
    private readonly cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit(): void {
    this.initializeEventCardInterval();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private initializeEventCardInterval(): void {
    this.intervalId = setInterval(() => {
      this.selectedIndex = (this.selectedIndex + 1) % this.contents.length;
      this.cdr.detectChanges();
    }, 5000);
  }
}
