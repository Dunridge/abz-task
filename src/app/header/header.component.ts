import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navFixed = false;
  private scrollOffset = 70;


  @HostListener('window: scroll')
  private onWindowScroll(): void {
    this.navFixed = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
    if (window.pageYOffset === 72) {
      this.navFixed = false;
      document.getElementById('header-element').style.position = 'static';
    } else {
      // document.getElementById('header-element').style.position = 'fixed';
      const headerElem = document.getElementById('header-element');
      headerElem.style.position = 'fixed';
      // headerElem.style.zIndex = '100';
    }
  }

  constructor(
    @Inject(DOCUMENT) document: any
  ) {
  }

  ngOnInit(): void {
  }

}
