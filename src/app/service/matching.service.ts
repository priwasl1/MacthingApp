import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';
import { Value } from '../Models/value'

@Injectable()
export class MatchingService {
    url : string = "http://localhost:59258/api/values";
    constructor(private http : HttpClient) { }
    
getValues(): Observable<Value[]>{
    return this.http.get<Value[]>(this.url);
} 
}
