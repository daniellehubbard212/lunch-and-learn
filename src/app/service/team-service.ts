import { Injectable } from '@angular/core';
import { of, merge } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class TeamService {
  public getTeam() {
      return merge(
      of([
        {
        name: 'Adam'
        },
        {
        name: 'Joe'
        },
        {
        name: 'Michael'
        },
        {
        name: 'Bernard'
        }
      ]),
      of([
        {
          name: 'Danielle'
        }
      ]).pipe(delay(2000))
    )
  }
}