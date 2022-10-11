import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthHeadrerInterceptor } from "./auth-header-interceptor";

export const HttpInterceptProviders = [
  {provide:HTTP_INTERCEPTORS,useClass:AuthHeadrerInterceptor,multi:true}

];
