import { Component, OnInit } from '@angular/core';
import { RestApiServiceService } from 'src/app/rest-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  ingredient: string;
  ingredients: any;
  users: any;
  constructor(private restApi: RestApiServiceService) {
    this.title = 'Ingredientes';

    this.ingredients = [];
    this.users = [];
  }

  ngOnInit() {
    this.restApi.getData()
      .then((results: any) => {
        this.users = results.data;
      })
      .catch(err => console.log('Error', err));

  }

  addIngredient() {
    this.ingredients.push(this.ingredient);
  }

}
