import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.services";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {BikeServices} from "../../services/bike.services";
import {Bike} from "../../models/bike";

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.page.html',
  styleUrls: ['./bike-list.page.scss','../../res/fonts/util.css','../../res/vendor/bootstrap/css/bootstrap.min.css','../../res/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
    '../../res/fonts/iconic/css/material-design-iconic-font.min.css','../../res/vendor/animate/animate.css','../../res/vendor/css-hamburgers/hamburgers.min.css', '../../res/vendor/animsition/css/animsition.min.css',
    '../../res/vendor/select2/select2.min.css','../../res/vendor/daterangepicker/daterangepicker.css']
})
export class BikeListPage implements OnInit {

  llista: [Bike];

  //Com a constructor, pasem els Services (on estaran implementades les funcions), el servei de Dades (per passar dades entre components) i el Router
  constructor(private bikeService: BikeServices,private dataService:DataService, private router: Router,private activatedRoute:ActivatedRoute,public toastController: ToastController) {
    activatedRoute.params.subscribe(val => {
      this.refresh();
    });
  }

  ngOnInit() {
    this.llistaBikes();
  }

  refresh(){
    this.llistaBikes();
  }

  llistaBikes() {
    console.log("Operació de demanar bicis realitzada al BackEnd:");
    this.bikeService.obtainBikes()
        .subscribe(async response => {
              console.log("Resposta del BackEnd" + response.body);
              //Podem filtrar per tots els codis 2XX
              if (response.status == 200) {
                this.llista = response.body as [Bike];
                const toast = await this.toastController.create({
                  message: "Bicis Actualizadas",
                  duration: 2000,
                  position: 'bottom',
                });
                toast.present();
              } else {
                //Error desconegut
                console.log("Error");
              }
            },
            async err => {
              console.log("Error del BackEnd" + err);
              //Podem filtrar per tots els altres codis
              if (err.status == 400) {
                console.log("No hi han bicis");
                this.llista = null;
                const toast = await this.toastController.create({
                  message: "No hay bicis en la base de datos",
                  duration: 2000,
                  position: 'bottom',
                });
                toast.present();
              } else {
                //Error desconegut
                console.log("Error");
              }
            });
  }
  async order() {
    this.llista.sort(function (a, b) {
      return a.kms - b.kms;
    });
    const toast = await this.toastController.create({
      message: "Bikes ordered",
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

}
