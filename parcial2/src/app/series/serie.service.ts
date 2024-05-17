import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Serie} from './serie';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private baseUrl= "https://gist.githubusercontent.com/VivianGomez/cc4116c67063bed35e9a39723e7a9d6a/raw/24ec60d9e5198a2fa76ad51c7ed577cfacf29f7f/"

constructor(private http:HttpClient) { }

getSeries():Observable<Serie[]>{
  return this.http.get<Serie[]>(this.baseUrl);
}

}


/**
 * import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Curso} from './curso';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

private baseUrl='https://gist.githubusercontent.com/t-montes/67cdf7509174f3556f4ff0082045b8ad/raw/4555fca3360200ab195067e92845c5571d31f624/online-courses.json'

constructor(private http:HttpClient) { }

getCursos():Observable<Curso[]>{
  return this.http.get<Curso[]>(this.baseUrl);
}

}
 */
