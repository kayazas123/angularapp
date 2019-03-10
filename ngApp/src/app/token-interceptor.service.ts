import { Injectable , Injector} from '@angular/core';
import { HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { AuthService } from './auth.service'


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authService = this.injector.get(AuthService)
    
    console.debug(`Inside interceptor ${authService.getToken()}`)

    let tokenizedReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${authService.getToken()}`
      },
    });
      return next.handle(tokenizedReq)
  }
  

}
