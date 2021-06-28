import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

//Services
import { PlacesService } from './places.service'

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  //Este arreglo vacio se llena con el servicio
  places = []

  constructor(private placeService: PlacesService,
              private router: Router) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces()
  }

  //Cuando el componente vuelve a ser pintado se ejecuta esto
  ionViewWillEnter(){
    this.places = this.placeService.getPlaces()
  }

  addNewPlace(){
    this.router.navigate(["/new-place"])
  }

  goToHome(){
    this.router.navigate(["/home"])
  }

}
