import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NewsComponent } from './news/news.component';
import { AlunoProfileComponent } from './aluno-profile/aluno-profile.component';
import { ProfessorProfileComponent } from './professor-profile/professor-profile.component';
import { ProfessoresComponent } from './professores/professores.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    NewsComponent,
    AlunoProfileComponent,
    ProfessorProfileComponent,
    ProfessoresComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
