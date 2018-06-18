import {Injectable} from '@angular/core';
import {Recipe} from '../model/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[];

  constructor() {
    this.recipes = [
      Recipe.recipeFromJSON({
        id: 1,
        title: 'Eggs',
        description: 'This is my favourite fried eggs. Take 2 eggs smash it. Take a frying pan and put eggs on it.',
        coverPhoto: null,
        preparationTime: 30,
        personNumber: 2,
        keywords: ['eggs', 'frying'],
        ingredients: [
          {'ingredient': 'eggs', 'measure': '2'},
          {'ingredient': 'salt', 'measure': '3g'},
          {'ingredient': 'pepper', 'measure': '3g'}
        ],
        instructions: [
          {'instruction': 'Take eggs', 'photo': null},
          {'instruction': 'Brake it to bowl', 'photo': null},
          {'instruction': 'Smash it', 'photo': null},
          {'instruction': 'Pour out to frying pan', 'photo': null}
        ]
      }),
      Recipe.recipeFromJSON({
        id: 2,
        title: 'Boiled Potatos',
        description: 'Take 5 potatos, clean up and put in the water.',
        coverPhoto: null,
        preparationTime: 40,
        personNumber: 4,
        keywords: ['potato', 'boiled'],
        ingredients: [
          {'ingredient': 'potato', 'measure': '5'},
          {'ingredient': 'salt', 'measure': '3g'},
          {'ingredient': 'pepper', 'measure': '5g'},
        ],
        instructions: [
          {'instruction': 'Take potato', 'photo': null},
          {'instruction': 'Сlean them', 'photo': null},
          {'instruction': 'Put into the water', 'photo': null},
          {'instruction': 'Cook until ready', 'photo': null}
        ]
      }),
      Recipe.recipeFromJSON({
        id: 3,
        title: 'Burger',
        description: 'Take bread, meat and souse and make amazing burger',
        coverPhoto: null,
        preparationTime: 35,
        personNumber: 2,
        keywords: ['burger', 'meat', 'bread', 'souse', 'cabbage'],
        ingredients: [
          {'ingredient': 'meat', 'measure': '500g'},
          {'ingredient': 'salt', 'measure': '10g'},
          {'ingredient': 'pepper', 'measure': '10g'},
          {'ingredient': 'bread', 'measure': '1 bread'},
          {'ingredient': 'souse', 'measure': '1'},
          {'ingredient': 'cabbage', 'measure': '1'}
        ],
        instructions: [
          {'instruction': 'Take Bread', 'photo': null},
          {'instruction': 'Divide it into 2 parts', 'photo': null},
          {'instruction': 'Take meat and smoother it', 'photo': null},
          {'instruction': 'Make 2 cutlets', 'photo': null},
          {'instruction': 'Take souse and put it on the bread parts', 'photo': null},
          {'instruction': 'Put cutlets and cabbage to bread', 'photo': null}
        ]
      })
    ];
  }

  getAllRecipes(): Promise<Recipe[]> {
    return new Promise(((resolve, reject) => resolve(this.recipes)));
  }

  getRecipeById(recipeId: number): Promise<Recipe> {
    return new Promise(((resolve, reject) => {
      for (const recipe of this.recipes) {
        if (recipeId === recipe.id) {
          resolve(recipe);
        }
      }
      reject(Error('No recipe exists with such id'));
    }));
  }
}
