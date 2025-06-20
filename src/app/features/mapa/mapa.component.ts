import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import Panzoom, { PanzoomObject } from '@panzoom/panzoom';

@Component({
  selector: 'app-mapa',
  standalone: true,
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit, OnDestroy {
  @ViewChild('panzoomImg', { static: true }) panzoomImg!: ElementRef<HTMLImageElement>;
  private panzoom!: PanzoomObject;

  mapSrc = 'assets/images/map/swordcoastmap.jpg';

    ngAfterViewInit() {
    this.panzoom = Panzoom(this.panzoomImg.nativeElement, {
      maxScale: 5,
      minScale: 0.5,
      disablePan: false,
      canvas: false
});
  }

  ngOnDestroy() {
    this.panzoom.destroy();
  }

  zoomIn() {
    this.panzoom.zoomIn();
  }

  zoomOut() {
    this.panzoom.zoomOut();
  }

  resetView() {
    this.panzoom.reset();
  }
}
