import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css'
})
export class SubscriptionFormComponent {
    constructor(private subService: SubscribersService){}

    onSubmit(formVal:any){
        const subData: Sub={
          name:formVal.name,
          email:formVal.email
        }

        // this.subService.addSubs(subData);
        // this.subService.checkSubs(subData.email)
        
  }

}
