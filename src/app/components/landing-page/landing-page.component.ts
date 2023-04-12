import { Component } from '@angular/core';
import { faFacebook, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  facebookIcon = faFacebook;
  linkedinIcon = faLinkedin;
  instagramIcon = faInstagram;
  mailIcon = faEnvelope;

  facebookLink = 'https://www.facebook.com/Oana.Mrg';
  linkedinLink = 'https://www.linkedin.com/in/oana-maria-grigore-a010a21a1';
  instagramLink = 'https://instagram.com/oana.mrg?igshid=ZDdkNTZiNTM=';
  mailLink = 'mailto: grigoremariaoana@gmail.com';
}
