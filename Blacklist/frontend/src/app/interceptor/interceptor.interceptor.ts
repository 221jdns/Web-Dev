import { HttpInterceptorFn, HttpErrorResponse, HttpRequest} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../components/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service/service.service';


export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(ServiceService);
  const http = inject(HttpClient);

  const access = authService.getAccessToken();
  const excludedUrls = [
    '/api/login',
    '/api/register'
  ];
  const shouldBypass = excludedUrls.some(url => req.url.includes(url));
  
  if (shouldBypass) {
    return next(req);
  }
  


  let authReq = req;

  if (access) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${access}`,
      },
    });
  }

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401 && authService.getRefreshToken()) {
        return authService.updateAccessToken(authService.getRefreshToken()!).pipe(
          switchMap((res) => {
            authService.saveTokens(res.access, authService.getRefreshToken()!);
        
            const newReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${res.access}`,
              },
            });
            return next(newReq);
          }),
          catchError(() => {
            authService.logout();
            return throwError(() => new Error('Unauthorized'));
          })
        );
      }

      return throwError(() => err);
    })
  );
};
