import { Injectable } from '@angular/core';

//Interfaces
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://www.futbolete.com/wp-content/uploads/2021/04/Torre-Eiffel-min.jpg',
      comments: ['Awesome place', 'Wonderful Experience']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9LPY-s2FhmvuBCuUnhppjfZZl_4OIu7zUZA&usqp=CAU',
      comments: []
    }
  ]

  constructor() { }

  getPlaces(){
    return [...this.places]
  }

  getPlace(placeId: string){
    return{
      ...this.places.find(place => {
      return place.id === placeId 
    })
    }
  }

  addPlace(title: string, imageURL: string){
    this.places.push({
      id: this.places.length + 1 + '',
      title,
      imageURL,
      comments: [] 
    });
  }

  deletePlace(placeId: string){
    //Se reemplaza el arreglo anterior con el nuevo con ese place eliminado
    this.places = this.places.filter(place => {
      return place.id !== placeId
    });
  }

  
}
