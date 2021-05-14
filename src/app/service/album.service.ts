import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  //   getAlbums(): Observable<AlbumModel[]>{                  
  //     return this.http.get<AlbumModel[]>("https://jsonplaceholder.typicode.com/albums"); 
  //   }      

  async getAlbums() {
    try {
      const data = await this.http.get('https://jsonplaceholder.typicode.com/albums').toPromise();
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  /**
   * Get photos by albumId from jsonplaceholder API
   * @param albumId - number
   */
  async getPhotos(albumId: number) {
    try {
      const data = await this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).toPromise();
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(`Status : ${error.status}, ` + `Response : ${error.error}`);
    }
    return throwError("Something want wrong. please try again later.");
  }
}
