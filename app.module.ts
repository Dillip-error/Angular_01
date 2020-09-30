import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './Components/table.component';
import { TableModule } from './Module/table/table.module';
import { HttpClientModule } from '@angular/common/http';
import { OwnerModule } from './owner/owner.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';

RouterModule.forRoot([
  { path: 'home', component: HomeComponent },
  { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
  { path: '404', component : NotFoundComponentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
])

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NotFoundComponentComponent,
    HomeComponent,
    SideNavComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    OwnerModule
  ],
  providers: [],
  bootstrap: [TableComponent]
})
export class AppModule { }
