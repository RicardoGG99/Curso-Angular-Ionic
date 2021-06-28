import { Component, OnInit } from '@angular/core';

//Services
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  //De photos service
  photos: []

  constructor(private photosService: PhotosService) {}

  ngOnInit(){
    this.photosService.getPhotos()
    .subscribe(data => {
      this.photos = data
    })
  }

}
