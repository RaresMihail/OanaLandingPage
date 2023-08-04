import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import articles from '../../../../assets/articles/articles.json'

import { BlogArticleModel } from '../../../models/blog-article.model';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article: BlogArticleModel | undefined;


  ngOnInit(){
    this.route.params.subscribe( params =>
      this.article = articles.find(article => article.name === params['name'])
  );
}

  constructor(private route: ActivatedRoute) {}

  getImageUrl(articleName: string): string {
    return `../../../assets/articles/${articleName}-wide.jpg`;
  }
}
