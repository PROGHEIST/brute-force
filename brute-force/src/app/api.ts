import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  
  public baseUrl = 'https://opensheet.elk.sh/1sbwVjp2sMe6M3-d2W-biq_Xak7QnGyVAGktR9tbcUBg/Sheet1';

  constructor(private http: HttpClient) {}

  fetchData(): Promise<any> {
    return this.http.get(this.baseUrl).toPromise();
  }

}
