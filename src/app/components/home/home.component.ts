import { Component, OnInit } from '@angular/core';
import { RestApiServiceService } from 'src/app/rest-api-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  ingredient: string;
  ingredients: any;
  users$: Observable<any>;
  constructor(private restApi: RestApiServiceService) {

    this.ingredients = [];

    this.users$ = this.restApi.getData();
  }

  ngOnInit() {
    // this.restApi.getData()
    //   .subscribe((results: any) => {
    //     this.users = results.data;
    //   },
    //     (err) => console.log(err));

  }

  addIngredient() {
    this.ingredients.push(this.ingredient);
  }

}
