import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {
  ngAfterViewInit(): void {
    const panels = Array.from(document.querySelectorAll('.story-panel')) as HTMLElement[];

    if (!panels.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: [0.35, 0.7],
        rootMargin: '0px 0px -10% 0px',
      },
    );

    panels.forEach((panel) => observer.observe(panel));

    const firstPanel = panels[0];
    if (firstPanel) {
      firstPanel.classList.add('is-visible');
    }
  }
}
