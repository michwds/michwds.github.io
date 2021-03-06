import {Component, NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {CoverComponent} from './cover/cover.component';
import {Title} from '@angular/platform-browser';
import {addImports} from '@angular/compiler-cli/src/ngtsc/transform/src/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Michael Woods - Portfolio';

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Michael Woods - Portfolio');
  }

  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }
}
