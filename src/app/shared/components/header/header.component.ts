import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IAuthService } from 'src/app/core/services/iauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private _athService:IAuthService) {
  }
  shouldRun = true;

  ngOnInit(): void {
  }

  logOut(){
    this._athService.logOut();
  }

}
