import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {film} from "../interfaces/film";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient: HttpClient) { }

  getFilms(): Observable<film[]> {
    return this.httpClient.get<film[]>('https://ghibliapi.herokuapp.com/films/');
  }
}
