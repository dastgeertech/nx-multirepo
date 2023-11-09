import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ComponentsModule } from '@ui/shared-ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ComponentsModule],
  selector: 'shell-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell-app';
}
