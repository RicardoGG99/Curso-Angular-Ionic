import { Component, OnInit } from '@angular/core';
//ActivatedRoute muestra los datos de la url
import { ActivatedRoute, Router } from '@angular/router'
import { Place } from '../place.model';

//Services
import { PlacesService } from '../places.service'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place

  constructor(private activatedRoute: ActivatedRoute, 
              private placesService: PlacesService, 
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //redirect
      const recipeId = paramMap.get('placeId')
       this.place = this.placesService.getPlace(recipeId);
       console.log(this.place)
    })
  }

  async deletePlace(){
    const alertEl = await this.alertController.create({
      header: 'Be careful',
      message: 'Are you sure you want to delete this place?',
      buttons: [
        {
          text: 'Cancel',
          //Incluye una logica que hace que se cierre la ventana y se cancele
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placesService.deletePlace(this.place.id)
            this.router.navigate(['/places'])
          }
        }
      ]
    });
    //Mostrar la alerta en pantalla
    await alertEl.present();
  }

}
