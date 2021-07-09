import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from '../core/domain/login-model';
import { IAuthService } from '../core/services/iauth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  rigister!:boolean;
  request=new LoginModel();
  constructor(
    private _athService:IAuthService,
    private readonly toastr: ToastrService,
    private readonly router: Router,

    ) { }

  ngOnInit(): void {
  } 

  IsRigister(){
    this.rigister=true;
  }
  IsLogin(){
      this.rigister=false;
  }
  

  login(){
    console.log(this.request)
    this._athService.login(this.request).subscribe(
      (response: any) => {
        this.toastr.success('SUCCESS LOGIN ');
        localStorage.setItem('TOKEN', response?.Data?.Token);
        this.router.navigate(['/pages']);
      },
    );
  }
}
