import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [new Recipe('Fries','French fries made in france ofc duh!','https://i.ytimg.com/vi/ETTyVQrUZt8/maxresdefault.jpg'),
  new Recipe('veg sandwich','A simple veg sandwich.','http://www.vegrecipesofindia.com/wp-content/uploads/2016/04/bombay-veg-sandwich-recipes21.jpg')];
  
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe:Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
