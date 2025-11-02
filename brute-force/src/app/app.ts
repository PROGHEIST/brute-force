import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { Api } from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  data : any[] = [];

  constructor(private api: Api, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.api.fetchData()
      .then((response: any) => {
        this.data = response;
        this.cdr.detectChanges();
      })
      .catch((error: any) => {
        console.error("error fetching data", error);
      });
  }
}
