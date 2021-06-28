import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  //Donde vamos a guardar los datos de las fotos
  photos: [];

  constructor(private httpClient: HttpClient) { }
  
  getPhotos(){
    //Pasamos la direccion de la API para consumir las fotos
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=10')
  }
}
