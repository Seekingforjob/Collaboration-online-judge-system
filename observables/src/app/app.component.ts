import { Component } from '@angular/core';
//import { setTimeout } from 'timers';

import { Observable, Subject} from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
    // console.log('setTimeout start exec');

    // setTimeout(() => {
    //   console.log('promise resolved');
    // }, 5000);

    // console.log('setTime end exec.');
    // console.log('setTime end exec.');
    // console.log('setTime end exec.');
    // console.log('setTime end exec.');
    // console.log('setTime end exec.');
    // console.log('setTime end exec.');
    // let promise = new Promise( (resolve, reject) => {
    //   console.log('promise works');

    //   setTimeout(() => {
    //     resolve('promise resolved');
    //   }, 3000);
    // } );

    // promise.then( (value: string) => {
    //   console.log(value);
    // });
    let stream$ = new Observable(observer => {
      console.log('observable exec');

      observer.next(1);
      observer.next(2);

      observer.error(new Error('not any more'));
    });

    let subscribtion = stream$.subscribe(
      value => console.log(value),
      error => console.error(error),
      () => console.log('done')
    );

  }
}
