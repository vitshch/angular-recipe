import {Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';
import {Recipe} from '../model/Recipe';

@Directive({selector: '[appHighlightRecipe]'})
export class HighlightRecipeDirective implements OnInit {

  @Input('appHighlightRecipe')
  recipe: Recipe;

  @Input('highlightColor')
  highlightColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.highlightColor = 'yellow';
  }

  ngOnInit(): void {
    const dateAdded = new Date(this.recipe.dateAdded).getTime();
    if (new Date().getTime() - 4 * 86400000 < dateAdded) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.highlightColor);
    }
  }

}
