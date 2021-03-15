import {Component, NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {addImports} from '@angular/compiler-cli/src/ngtsc/transform/src/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @NgModule({
    imports: [
      FormsModule,
    ],
    declarations: [],
  })
  title = 'portfolio2';
}
