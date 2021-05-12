import { Component, OnInit } from '@angular/core';
import { album } from 'src/app/models/album';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums : album[] = <album[]>[];    
  constructor(public Service:AlbumService) { }

  ngOnInit(): void {

    this.Service.getAlbums().subscribe((resp)=>{     
      this.albums = resp;                            
    });                                             
  }   
  

}
