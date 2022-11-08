import { Component,OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonSlides) slides: IonSlides
  constructor(private route: Router,) {
    
  }
  
next(){
  this.slides.slideNext()
  }
  
  skip(){
  
  }
  
  home() {
    this.route.navigate(['/tabs/dashboard']);
  }
  back(){
    this.slides.slidePrev()
  }

}
