import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {RecipeSummaryComponent} from './components/recipe-summary/recipe-summary.component';
import {RecipeDetailsComponent} from './components/recipe-details/recipe-details.component';
import {EditNewRecipeComponent} from './components/edit-new-recipe/edit-new-recipe.component';
import {RecipeService} from './services/recipe.service';
import {ReactiveFormsModule} from '@angular/forms';
import {SwearingPipe} from './misc/swearing.pipe';
import {HighlightRecipeDirective} from './misc/highlightrecipe.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeSummaryComponent,
    RecipeDetailsComponent,
    EditNewRecipeComponent,
    SwearingPipe,
    HighlightRecipeDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'editnewrecipe',
        component: EditNewRecipeComponent
      },
      {
        path: 'recipes',
        component: RecipeListComponent
      },
      {
        path: '',
        redirectTo: 'recipes',
        pathMatch: 'full'
      },
      {
        path: 'recipes/:recipe_id',
        component: RecipeDetailsComponent
      }
    ])
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
