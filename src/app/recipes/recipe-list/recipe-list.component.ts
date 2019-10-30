import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() selectedRecipe = new EventEmitter<number>();
  @Input() recipes: Recipe[]

  newReceipe: Recipe = new Recipe("", "", "");
  
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.recipes.push(this.newReceipe);
    this.newReceipe = new Recipe("", "", "");
  }

  onSelect(recipe:Recipe, index: number) {
    this.selectedRecipe.emit(index);
  }

}
