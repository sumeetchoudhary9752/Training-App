import { Component, OnInit } from '@angular/core';
// import { album } from 'src/app/models/album';
import { PhotoModel } from 'src/app/models/photos';
import { User } from 'src/app/models/User';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  photos!: PhotoModel[];
  users!: User[];

  filteredAlbums: any;
  albums:any;

  
  constructor(
    private albumsService: AlbumService,
    // private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    // this.getAlbums()
    // this.getPosts()
    this.fetchData()
  }
  

  filterAlbums(searchString: string) {
    return this.albums.filter((album: { title: string; }) =>
      album.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  private fetchData() {
    // this.spinner.show();
    const promise = this.albumsService.getAlbums();
    promise.then((data) => {
      this.albums = data;
      this.filteredAlbums = this.albums;
    }).catch((error) => {
      console.log(JSON.stringify(error));
    }).finally(() => {
      // this.spinner.hide();
    });
  }

  setUserName() {
    if (this.photos && this.users) {
      for(const photo of this.photos) {
        for(const user of this.users) {
          for(const album of this.albums) {
          if (photo.albumId === user.id) {
            photo.albumId = album.id
            }
          }
        }
      }
    }
  }
  

}
