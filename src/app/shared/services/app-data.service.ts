import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Item} from '../item-interface';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private Items: Array<Item>;
  private url = 'https://krapipl.imumk.ru:8443/api/mobilev1/update';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    const body = {data: ''};
    return this.http.post<any>(this.url, body).pipe(map((response: any) => {
      this.Items = response.items;
      return this.Items;
    }), catchError((error: Response) => throwError('Server do not response')));
  }
}
