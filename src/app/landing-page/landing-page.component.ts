import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Car {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit, OnDestroy {

  menuItems: string[] = ['Home', 'Product', 'Pricing', 'Contact'];

  cards = [
    {
      img: '../../assets/icons_and_images/user-cover-1.png',
      name: 'Julian Jameson',
      profession: 'Profession'
    },
    {
      img: '../../assets/icons_and_images/user-cover-2.png',
      name: 'Julian Jameson',
      profession: 'Profession'
    },
    {
      img: '../../assets/icons_and_images/user-cover-3.png',
      name: 'Julian Jameson',
      profession: 'Profession'
    },
    {
      img: '../../assets/icons_and_images/user-cover-4.png',
      name: 'Julian Jameson',
      profession: 'Profession'
    },
    {
      img: '../../assets/icons_and_images/user-cover-1.png',
      name: 'Julian Jameson',
      profession: 'Profession'
    },
    {
      img: '../../assets/icons_and_images/user-cover-2.png',
      name: 'Julian Jameson',
      profession: 'Profession'
    },
    {
      img: '../../assets/icons_and_images/user-cover-3.png',
      name: 'Julian Jameson',
      profession: 'Profession'
    },
    {
      img: '../../assets/icons_and_images/user-cover-4.png',
      name: 'Julian Jameson',
      profession: 'Profession'
    },
  ];

  form!: FormGroup;

  numVisibleCards = 4;
  numScrollCards = 4;




  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  @HostListener('window:resize', ['$event'])


  ngOnInit(): void {

  }

  submitForm(): void {
    if (this.form!.valid) {
      const emailValue = this.form!.get('email')!.value;
      console.log(emailValue);
    } else {
    }
  }

  onResize(event: any) {
    if (event.target.innerWidth <= 768) {
      this.numVisibleCards = 1;
      this.numScrollCards = 1;
    } else {
      this.numVisibleCards = 4;
      this.numScrollCards = 4;
    }
  }

  ngOnDestroy(): void { }

}
