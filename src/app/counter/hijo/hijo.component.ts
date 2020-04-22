import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import * as actions from "../counter.actions"

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  counter: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  multiply() {
    this.store.dispatch(actions.multiply({number: 2}));
  }

  divide() {
    this.store.dispatch(actions.divide({number: 2}));
  }
}
