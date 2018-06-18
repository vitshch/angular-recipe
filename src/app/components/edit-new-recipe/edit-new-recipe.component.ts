import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../model/Recipe';
import {RecipeService} from '../../services/recipe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipeInProgress: Recipe;

  constructor(private recipeService: RecipeService,
              private router: Router) {
    this.recipeInProgress = Recipe.createNew();
  }

  ngOnInit() {
  }

  addIngredient(): void {
    if (!this.recipeInProgress.ingredients) {
      this.recipeInProgress.ingredients = [{ingredient: null, measure: null}];
    } else {
      this.recipeInProgress.ingredients.push({ingredient: null, measure: null});
    }
  }

  removeIngredientOnIndex(index: number): void {
    this.recipeInProgress.ingredients.splice(index, 1);
  }

  addInstruction(): void {
    if (!this.recipeInProgress.instructions) {
      this.recipeInProgress.instructions = [{instruction: null, photo: null}];
    } else {
      this.recipeInProgress.instructions.push({instruction: null, photo: null});
    }
  }

  removeInstructionOnIndex(index: number): void {
    this.recipeInProgress.instructions.splice(index, 1);
  }

  addRecipeButtonClicked(): void {
    this.recipeService.addNewRecipe(this.recipeInProgress)
      .then((recipe) => this.router.navigate(['recipes', recipe.id]));
  }
}
