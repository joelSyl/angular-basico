import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  hero : string = '';
  heroes: string[]= ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Capitán América'];
  borrarHeroe(): void{
    this.hero=this.heroes.shift() || '';
  }

}
