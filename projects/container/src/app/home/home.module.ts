import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './home.component';
import {ShellModule} from "../../../../shell/src/app/shell.module";
import {StoreModule} from "../../../../store/src/app/store/store.module";


@NgModule({
    imports: [
        HomeRoutingModule,
        ShellModule,
        StoreModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
    ]
})
export class HomeModule {
}