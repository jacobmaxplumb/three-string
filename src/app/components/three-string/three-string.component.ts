import { Component, OnInit } from '@angular/core';
import { ThreeStringRequest } from 'src/app/models/three-string-request';
import { ThreeStringService } from 'src/app/services/three-string.service';
import { ThreeStringResponse } from 'src/app/models/three-string-response';

@Component({
  selector: 'app-three-string',
  templateUrl: './three-string.component.html',
  styleUrls: ['./three-string.component.css']
})
export class ThreeStringComponent implements OnInit {

  everyThirdLetter: string;

  constructor(private threeStringService: ThreeStringService) { }

  ngOnInit() {
  }

  stringFormSubmitted(data: any) {
    console.log(data.value);
    this.threeStringService.getThreeStringResponse(data.value).subscribe(this.onSuccess.bind(this), this.onError.bind(this))
  }

  onSuccess(data: ThreeStringResponse) {
    this.everyThirdLetter = data.return_string;
  }

  onError(error) {
    alert(error.message);
  }

}
