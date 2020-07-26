import { Injectable } from '@angular/core';
import { ThreeStringRequest } from '../models/three-string-request';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThreeStringResponse } from '../models/three-string-response';

@Injectable({
  providedIn: 'root'
})
export class ThreeStringService {

  url: string = 'http://localhost:3000/test';

  constructor(private http: HttpClient) { }

  getThreeStringResponse(data: ThreeStringRequest): Observable<ThreeStringResponse> {
    console.log(data);
    return this.http.post<ThreeStringResponse>(this.url, data);
  }
}
