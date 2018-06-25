import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'swearingFilter'})
export class SwearingPipe implements PipeTransform {

  badWords: string[] = [
    'crapp',
    'damn',
    'butt'
  ];

  transform(value: string, replaceString: string = '(ups!)'): string {
    for (const badWord of this.badWords) {
      value = value.replace(badWord, replaceString);
    }
    return value;
  }

}
