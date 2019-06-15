import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { headerConfig, Page } from '../../shared/header/header.config';

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private pages: Array<Page> = headerConfig.pages;

  constructor(private title: Title, private meta: Meta) {
  }

  private static buildTitle(titlePrefix: string): string {
    return titlePrefix ? `${titlePrefix} | ${headerConfig.defaults.title}` : headerConfig.defaults.title;
  }

  private static buildDescription(description: string): string {
    return description || headerConfig.defaults.description;
  }

  private getPageData(url: string): Page {
    let pageData = null;
    for (const page of this.pages) {
      if (page.url === url) {
        pageData = page;
        break;
      } else if (page.children) {
        for (const child of page.children) {
          if (child.url === url) {
            pageData = child;
            break;
          }
        }
      }
    }
    return pageData;
  }

  public updateTitleAndMetaTags(url: string) {
    const pageData: Page = this.getPageData(url);
    if (pageData) {
      this.title.setTitle(SEOService.buildTitle(pageData.title));
      this.meta.updateTag({name: 'description', content: SEOService.buildDescription(pageData.description)});
    }
  }
}
