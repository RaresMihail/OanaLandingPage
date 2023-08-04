import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogArticleModel } from '../../models/blog-article.model';

import articles from '../../../assets/articles/articles.json'

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {
  articles: BlogArticleModel[] = articles;
  
  constructor( private route: ActivatedRoute, private router: Router) {}
  
  getImageUrl(articleName: string): string {
    return `../../../assets/articles/${articleName}.jpg`
  }

  goToArticle(articleName: string): void {
    this.router.navigate([articleName], { relativeTo: this.route });
  }
}
