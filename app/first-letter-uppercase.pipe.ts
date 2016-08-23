import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'firstLetterUppercase'})
export class FirstLetterUpperCasePipe implements PipeTransform {
    transform(input : string): string {
        return input.charAt(0).toUpperCase() + input.substring(1);
    }
}