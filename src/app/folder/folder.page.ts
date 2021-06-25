import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import points from './points.json'


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder: string;
  center = new google.maps.LatLng(-8.063242, -34.871048);
  markers: google.maps.Marker[];

  options: google.maps.MapOptions = {
    mapTypeId: 'terrain',
    scrollwheel: true,
    styles:[
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      }]
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.folder)
    this.markers = this.getMarkers(points);
  }

    getMarkers(results) {
      let array = []
    for (let i = 0; i < results.features.length; i++) {
      if(results.features[i].properties.cat.toLowerCase() === this.folder.toLowerCase() || this.folder.toLowerCase() ==='all') {
        const coords = results.features[i].geometry.coordinates;

        const latLng = new google.maps.LatLng(coords[1], coords[0]);

        let x = new google.maps.Marker({
          position: latLng,

          label: {color:'green', text:results.features[i].properties.title},
        });

        x.setAnimation(google.maps.Animation.BOUNCE)

        array.push(x);
      }
    }
    return array;
  }

}
