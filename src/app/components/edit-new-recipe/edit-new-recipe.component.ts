import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../model/Recipe';
import {RecipeService} from '../../services/recipe.service';
import {Router} from '@angular/router';
import {AsyncValidatorFn, ReactiveFormsModule} from '@angular/forms';
import {AbstractControl, ValidatorFn, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipeInProgress: Recipe;
  recipeForm: FormGroup;


  constructor(private recipeService: RecipeService,
              private router: Router) {
    this.recipeInProgress = Recipe.createNew();
    this.buildFromGroup();
  }

  ngOnInit() {
  }

  private buildFromGroup(): void {
    const fg = {
      'title': new FormControl(this.recipeInProgress.title, [Validators.required, Validators.min(1),
        Validators.max(100)]),
      'description': new FormControl(this.recipeInProgress.description, [Validators.required, Validators.min(1), Validators.max(500)]),
      'preparationTime': new FormControl(this.recipeInProgress.preparationTime, [Validators.required]),
      'personNumber': new FormControl(this.recipeInProgress.personNumber, [Validators.required, Validators.min(1), Validators.max(100)])
    };

    for (let i = 0; i < this.recipeInProgress.ingredients.length; i++) {
      fg['ingredient_' + i] = new FormControl(this.recipeInProgress.ingredients[i].ingredient, [Validators.required]);
      fg['measure_' + i] = new FormControl(this.recipeInProgress.ingredients[i].measure, [Validators.required]);
    }

    for (let i = 0; i < this.recipeInProgress.instructions.length; i++) {
      fg['instructions_' + i] = new FormControl(this.recipeInProgress.instructions[i].instruction, [Validators.required]);
    }

    this.recipeForm = new FormGroup(fg);
  }

  addIngredient(): void {
    if (!this.recipeInProgress.ingredients) {
      this.recipeInProgress.ingredients = [{ingredient: null, measure: null}];
    } else {
      this.recipeInProgress.ingredients.push({ingredient: null, measure: null});
    }
    this.buildFromGroup();
  }

  removeIngredientOnIndex(index: number): void {
    this.recipeInProgress.ingredients.splice(index, 1);
    this.buildFromGroup();
  }

  addInstruction(): void {
    if (!this.recipeInProgress.instructions) {
      this.recipeInProgress.instructions = [{instruction: null, photo: null}];
    } else {
      this.recipeInProgress.instructions.push({instruction: null, photo: null});
    }
    this.buildFromGroup();
  }

  removeInstructionOnIndex(index: number): void {
    this.recipeInProgress.instructions.splice(index, 1);
    this.buildFromGroup();
  }

  addRecipeButtonClicked(): void {
    this.recipeService.addNewRecipe(this.recipeInProgress)
      .subscribe((recipe) => this.router.navigate(['recipes', recipe.data.id]));
    this.buildFromGroup();
  }
}
//
// export function testValidator(): AsyncValidatorFn {
//   return (control: AbstractControl) => {
//     if (control.value.toLowerCase().indexOf('test') === -1) {
//       return
//     }
//     return null;
//   };
// }
