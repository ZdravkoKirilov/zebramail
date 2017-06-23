import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { routeChangeAnimation } from '../../animations/routeChange';
import { getRegisteredMails } from '../state/actions';
import { Store } from '@ngrx/store';
import { State } from '../../store/state/MainState';
import { DashboardState } from '../state/initialState';
import { MailMetadata } from '../../api/models/MailMetadata';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routeChangeAnimation],
})
export class DashboardComponent implements OnInit, OnDestroy {
  headerTitle: String = 'Dashboard';
  registeredMails: MailMetadata[] = [];
  showHeaderControls: Boolean = true;
  @HostBinding('@routeChangeAnimation') routeChangeAnimation;
  previousUrl: string;
  routerSubscription: any;

  constructor(private store: Store<State>, private router: Router) {
    this.routerSubscription = router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart): void => {
        this.previousUrl = event.url;
      });
  }

  ngOnInit() {
    this
      .store
      .dispatch(getRegisteredMails());

    this
      .store
      .select('dashboard')
      .subscribe((data: DashboardState) => {
        this.registeredMails = <MailMetadata[]>data.items;
        this.registeredMails = this.registeredMails.map(elem => {
          return Object.assign(elem, {
            routerLink: `/mails/${elem.internalName}`
          });
        })
      });
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
