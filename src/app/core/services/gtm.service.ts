import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GtmService {
  private dataLayer: any[];

  constructor() {
    this.dataLayer = (<any>window).dataLayer || [];
  }

  public sendEvent(eventCategory: string, eventAction: string, eventLabel?: string) {
    const event = 'interaction';
    this.dataLayer.push({event, eventCategory, eventAction, eventLabel});
  }
}
