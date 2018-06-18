import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from '../../model/Recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent {
  @Input()
  recipe: Recipe;

  @Output()
  userCLick: EventEmitter<number> = new EventEmitter();


  constructor() {
  }

  userClick() {
    this.userCLick.emit(this.recipe.id);
  }
}
