 import { Component } from '@angular/core';



@Component ({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' 
})

export class AppComponent {
  appTitle: string = 'Welcome';
  appStatus: boolean = true;
  appList: any[] = [ {
    "ID": "1",
    "Name" : "One",
    "url": 'app/Images/images_download.jpg'
 },

 {
    "ID": "2",
    "Name" : "Twos",
    "url": 'app/Images/images_download.jpg'
 } ];
}
