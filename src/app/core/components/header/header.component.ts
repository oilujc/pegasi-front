import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { logout } from '../../store/core.actions';
import { selectCore } from '../../store/core.selectors';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  auth$ = this.store.select(selectCore);

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(logout());
  }

}
