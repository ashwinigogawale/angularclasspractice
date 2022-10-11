import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
@Injectable()

export class AuthHeadrerInterceptor implements HttpInterceptor{
intercept(request:HttpRequest<any>,next:HttpHandler){
console.log(request.url);
  console.log('Auth interceptor providers');
  const authToken = "my auther token";
  const authReq = request.clone({
    setHeaders:{Authrization : authToken}
  });
  return next.handle(authReq);
}

}
