import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SobreComponent } from './sobre/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from "@angular/common/http";
import { IncluirComponent } from './cadastros/produtos/incluir/incluir.component';
import { EditarComponent } from './cadastros/produtos/editar/editar.component';
import { ExcluirComponent } from './cadastros/produtos/excluir/excluir.component';
import { ListarComponent } from './cadastros/produtos/listar/listar.component';
import { CadastrosComponent } from './cadastros/cadastros/cadastros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AdminComponent,
    SobreComponent,
    IncluirComponent,
    EditarComponent,
    ExcluirComponent,
    ListarComponent,
    CadastrosComponent,
  ],
  imports: [
    HttpClientModule,
    MatSliderModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
