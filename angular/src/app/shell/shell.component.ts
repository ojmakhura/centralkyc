import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';
import * as nav from './navigation';
import { LanguageSelectorComponent } from '@app/i18n/language-selector.component';
import { AppEnvStore } from '@app/store/app-env.state';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, MaterialModule, RouterModule, LanguageSelectorComponent],
})
export class ShellComponent implements OnInit {
  readonly appStore = inject(AppEnvStore);
  protected keycloak = inject(Keycloak);

  menus: any[] = [];
  constructor(
    private titleService: Title,
    private breakpoint: BreakpointObserver,
  ) {}

  ngOnInit() {
    this.menus = nav.menuItems;
  }

  logout() {}

  get username(): string | null {
    return null;
  }

  get isMobile(): boolean {
    return this.breakpoint.isMatched(Breakpoints.Small) || this.breakpoint.isMatched(Breakpoints.XSmall);
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  getMenuIcon(titleKey: string): string {
    const iconMap: { [key: string]: string } = {
      'organisation.title': 'business',
      'settings.title': 'settings',
      'document.type.title': 'description',
      'individual.title': 'people',
      'users.title': 'group',
      'kyc.subscription.title': 'card_membership',
      'invoice.title': 'receipt',
      home: 'home',
      about: 'info',
    };
    return iconMap[titleKey] || 'circle';
  }
}
