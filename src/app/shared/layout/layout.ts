import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  // Add this for zoneless compatibility
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Layout {
  menuOpen = signal(true);

  toggleMenu() {
    this.menuOpen.update(value => !value);
  }
}