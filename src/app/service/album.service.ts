import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http : HttpClient) { }

  getAlbums(): Observable<album[]>{                  
    return this.http.get<album[]>("https://jsonplaceholder.typicode.com/albums"); 
  }     
}
