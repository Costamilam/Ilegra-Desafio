import { HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ResponseInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        return next.handle(request).toPromise().catch(
            (error: HttpErrorResponse) => {
                if (!error.ok) {
                    this.router.navigate(['/error', error.status, error.error.detail])
                }
            }
        );
    }

}
