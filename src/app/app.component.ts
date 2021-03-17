import { Component, Renderer2 } from '@angular/core';
import { faGithub, faTwitter, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Linkinbio';

  faGithub = faGithub;
  faTwitter = faTwitter;

  moon = faMoon;
  sun= faSun;

  isNightMode= false;

  socialNetworks=[
    {
      image: faLinkedin,
      titulo: "¡Contáctame por Linkedin!",
      link:"https://www.linkedin.com/in/jorge-espinosa-jiménez-4aa622134/"

    },
    {
      image: faGlobeEurope,
      titulo: "¡Descarga mi CV en mi nueva Web!",
      link:"https://jorgeespinosa.es"

    },
    {
      image: faInstagram,
      titulo: "¡Sigueme en Instagram!",
      link:"https://www.instagram.com/ejcreativestudio/"

    },
    {
      image: faYoutube,
      titulo: "¡Sigueme en YouTube!",
      link:"https://www.youtube.com/channel/UCyXnqdnY2sVEFyY8jkYauAg"

    },

    /* {
      image: faGithub,
      titulo: "¡Mis proyectos de GITHUB!",
      link:"http://github.com"
    }, */
  ]

  constructor ( private renderer: Renderer2){

  }
nightMode(){
  this.isNightMode = !this.isNightMode
  if(this.isNightMode) {
    this.renderer.addClass(document.body, 'night');
  } else {
    this.renderer.removeClass(document.body, 'night');
  }
}
}
