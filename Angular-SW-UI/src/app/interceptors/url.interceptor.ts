import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

export class UrlInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        return next.handle(
            request.clone({
                url: environment.urlApi + request.url
            })
        );
    }

}
