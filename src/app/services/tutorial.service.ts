import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}book/`)
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}book/${id}/`);
  }

  create(object: any) {
    return this.http.post(`${environment.apiUrl}book/`, object)
  }

  update(object: any) {
    return this.http.put(`${environment.apiUrl}book/${object.id}/`, object)
  }

  getById(id: any) {
    return this.http.get<any>(`${environment.apiUrl}book/${id}/`).pipe(
      map((obj) => obj)
    );
  }

}
