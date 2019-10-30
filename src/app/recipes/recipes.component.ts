import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  gotRecipe : Recipe;
  selectedIndex: number;
  recipes: Recipe[] = [new Recipe('Fries','French fries made in france ofc duh!','https://i.ytimg.com/vi/ETTyVQrUZt8/maxresdefault.jpg'),
  new Recipe('veg sandwich','A simple veg sandwich.','http://www.vegrecipesofindia.com/wp-content/uploads/2016/04/bombay-veg-sandwich-recipes21.jpg')];
  constructor() { }

  ngOnInit() {
  }

  setRecipe(index: number) {
    this.gotRecipe = this.recipes[index];
    this.selectedIndex = index;
  }

  editRecipe(recpie: Recipe) {
    this.recipes[this.selectedIndex] = recpie
  }


}
