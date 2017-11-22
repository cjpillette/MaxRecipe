import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'The full content of the test recipe', 'https://cdn-jpg2.thedailymeal.com/sites/default/files/2014/09/25/chimichurri-sauce.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
