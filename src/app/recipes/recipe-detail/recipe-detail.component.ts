import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe :Recipe;
  isEditRecipe:boolean = false;
  @Output() editRecipe = new EventEmitter<Recipe>();
  recipeClone: Recipe;

  constructor() {
    this.recipeClone = {name: "", desc: "", imageURL: ""}
  }

  ngOnInit() {
    
  }
  
  ngOnChanges() {
    this.recipeClone = Object.assign({}, this.recipe)
  }

  toggleEditRecipe(){
    this.isEditRecipe = !this.isEditRecipe;
  }

  onSubmit(){
    this.editRecipe.emit(this.recipeClone);
  }

}
