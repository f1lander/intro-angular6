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
  _getData;
  constructor(private restApi: RestApiServiceService) {
    this.title = 'Ingredientes';

    this._getData = this.restApi.getData().subscribe();

    this.ingredients = [];
    this.users = [];
  }

  ngOnInit() {
    this.restApi.getData()
      .subscribe((results: any) => {
        this.users = results.data;
      }, (err) => console.log(err));
      // .catch(err => console.log('Error', err));
  }

  addIngredient() {
    this.ingredients.push(this.ingredient);
  }

}
