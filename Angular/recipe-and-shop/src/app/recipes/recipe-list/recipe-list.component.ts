import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[] = [
  new Recipe('Kids Recipe', 'This recipe consists of bread toast and fries', 'https://cdn.tarladalal.com/category/Quick-Recipes-for-Kids.jpg'),
  new Recipe('Indan Kids Recipe', 'This recipe consists of Frankies and Biryani', 'https://pipingpotcurry.com/wp-content/uploads/2020/08/Kid-Friendly-Recipe-Roundup-Pins-2.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
