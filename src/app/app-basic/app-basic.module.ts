import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '@environments/environment';
import { VrpHttpInterceptor } from '@app/vrp-common';
import { AppModule, AppComponent } from '@app/app.module';
import { AppBasicRoutingModule } from './app-basic-routing.module';

const BACKEND_URL = environment.backEndUrl;

@NgModule({
    imports: [
        AppModule,
        AppBasicRoutingModule,
    ],
    providers: [
        Title,
        { provide: HTTP_INTERCEPTORS, useClass: VrpHttpInterceptor, multi: true, },
        { provide: 'WEBSOCKET_URL', useValue: `${BACKEND_URL}/` },
        { provide: 'AUTHENTICATION_BASE_URL', useValue: `${BACKEND_URL}/web/auth` },
        { provide: 'MAP_BASE_URL', useValue: `${BACKEND_URL}/web/map` },
        { provide: 'USER_BASE_URL', useValue: `${BACKEND_URL}/web/user` },
        { provide: 'PROBLEM_REST_BASE_URL', useValue: `${BACKEND_URL}/web/problem` },
        { provide: 'USER_GROUP_REST_BASE_URL', useValue: `${BACKEND_URL}/web/usergroup` },
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppBasicModule { }
