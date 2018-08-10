import {Component} from '@angular/core';
import { AnimalInfo } from '../models/animalInfo.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {
  products = ['Action Figure', 'Baseball Cap', 'T-Shirt'];
  model = new AnimalInfo('Elephant', 'Africa', true, 'mammal', 'default');
  hasProductError = false;

  animalNameToUpperCase(value: string) {
    if (value.length > 0)
    {
      this.model.animalName = value.charAt(0).toUpperCase() + value.slice(1);
    }
    else
    {
      this.model.animalName = value;
    }
  }

  validateProduct(value) {
    if (value === 'default')
    {
      this.hasProductError = true;
    }
    else
    {
      this.hasProductError = false;
    }
  }
}