import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBm6a1sdRfoMz5rQRdd-JX-w-7SMZSFG30",
      authDomain: "ng-recipe-book-36d95.firebaseapp.com"
    })
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
