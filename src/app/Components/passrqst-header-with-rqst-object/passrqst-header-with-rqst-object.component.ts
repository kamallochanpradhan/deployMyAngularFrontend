import { Component } from '@angular/core';
import { PassRqstHeadeWithRqstModelService } from 'src/app/Services/pass-rqst-heade-with-rqst-model.service';

@Component({
  selector: 'app-passrqst-header-with-rqst-object',
  standalone: true,
  imports: [],
  // Note: If you have any other components or modules to import, add them here
  templateUrl: './passrqst-header-with-rqst-object.component.html',
  styleUrls: ['./passrqst-header-with-rqst-object.component.css']
})
export class PassrqstHeaderWithRqstObjectComponent {

  constructor(private apiHeaderPassService: PassRqstHeadeWithRqstModelService) {}
  sendRequest() {
    debugger;
    const requestModel = {
      pname: 'kkkkkkk',
      pcode: 9888888
    };
    const authToken = '678898765666';
    const contentType = 'application/json';

   
    this.apiHeaderPassService.processRequest(requestModel).subscribe({
      
      next:response => {
        console.log('API Response:', response);
      },
      error:error => {
        console.error('API Error:', error);
      }
  });
}
}
