import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  // fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    {
      name: 'Haz tu voto',
      icon: '',
      link: '/cards-votes'
    },
    {
      name: 'Tus Votos',
      icon: '',
      link: '/votes'
    }
  ];
  private queryListener: () => void;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.queryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('click', this.queryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('click', this.queryListener);
  }
}
