import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CreateDataService } from './create-data.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private createDataService: CreateDataService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.createDataService.getToken();
    console.log(authToken);
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken)
    });
    console.log(authRequest);
    return next.handle(authRequest);
  }
}
