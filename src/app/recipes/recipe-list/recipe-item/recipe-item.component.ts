import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;
  @Output() select = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  selectItem() {
    this.select.emit();
  }

}
