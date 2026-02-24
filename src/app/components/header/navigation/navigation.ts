import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TabNavigation } from '../../../models/header/navigation/tab-navigation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [
    CommonModule,
    MatTabsModule
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation implements OnInit{

  public tabOptions: TabNavigation[] = [
    {tabName: 'Home', tabUrlPath: '/'},
    {tabName: 'About Us', tabUrlPath: '/about-us'},
    {tabName: 'Be A Mover', tabUrlPath: '/be-mover'},
    {tabName: 'Be A Partner', tabUrlPath: '/be-partner'}
  ];
  public selectedTab: string = this.tabOptions[0].tabName;

  constructor(
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadCurrentSelectedTab();
  }

  public selectTab(tab: TabNavigation): void {
    this.selectedTab = tab.tabName;
    this.navigateToPage(tab);
  }

  private navigateToPage(tab: TabNavigation): void {
    this.router.navigate([tab.tabUrlPath]);
  }

  private loadCurrentSelectedTab(): void {
    const currentUrlPath: string = globalThis.location.pathname.split('/')[1];
    const currentTabSelected: TabNavigation | undefined = this.tabOptions.find(option => option.tabUrlPath.includes(currentUrlPath));

    if (currentTabSelected) {
      this.selectTab(currentTabSelected);
    }
    else {
      this.selectTab(this.tabOptions[0]);
    }
  }
}
