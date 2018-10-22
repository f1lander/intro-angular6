import { Component, OnInit } from '@angular/core';
import { MongoStitchService } from 'src/app/mongo-stitch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  codingCategory: string;
  codingCategories: any;

  constructor(private _mongoStitchService: MongoStitchService) {

    this.title = 'Categorias de Lenguajes';
    this.codingCategories = [];
  }

  ngOnInit() {
    this._mongoStitchService.find('codingcategories')
      .then(docs => {
        console.log('codingcategories', docs);
      });
  }

  addIngredient() {
    this.codingCategories.push(this.codingCategory);

  }

}
