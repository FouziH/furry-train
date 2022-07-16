import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, } from "@angular/forms";

@Component({
  selector: 'app-dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrls: ['./dropdown-search.component.scss']
})

export class DropdownSearchComponent implements OnInit {
  states: string[] = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  selectedAreas: string[] = this.states;

  area = new FormControl('',[
    Validators.required,
  ]);

  myForm = this.builder.group({
    area: this.area
  });

  constructor(private builder: FormBuilder) { }
 ngOnInit(): void {
     
 }
  search(query: string){
    console.log('query', query)
    let result = this.select(query)
    this.selectedAreas = result;
  }

  select(query: string):string[]{
    let result: string[] = [];
    for(let a of this.states){
      if(a.toLowerCase().indexOf(query) > -1 || a.indexOf(query) > -1 || a.toUpperCase().indexOf(query) > -1){
        result.push(a)
      }
    }
    return result
  }
  submit() {

  }


}
