import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [{
    name: 'Apples',
    amount: 5
  }, {
    name: 'Oranges',
    amount: 6
  }];

  searchResults: Ingredient[] = this.ingredients.slice();
  constructor() { }

  ngOnInit() {
  }

  searchIngredient(searchText: string) {
    searchText = searchText.toLowerCase();
    if (searchText.length === 0)
      this.searchResults = this.ingredients.slice();
    this.searchResults = this.ingredients.filter(ingredient => {
      return ingredient.name.toLowerCase().includes(searchText);
    })
  }

  addIngredient(ingredient: Ingredient) {
    let isExist = false;
    this.ingredients.forEach((indiIngredient: Ingredient) => {
      if (indiIngredient.name === ingredient.name) {
        indiIngredient.amount += ingredient.amount;
        console.log(typeof indiIngredient.amount);
        isExist = true;
      }
    });
    if (!isExist) {
      this.ingredients.push(ingredient);
    }
    this.searchResults = this.ingredients.slice();
  }

  removeIngredent(ingredient) {
    const pos = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(pos, 1);
    this.searchResults = this.ingredients.slice();
  }

}
