export interface ComicDataWrapper {
    attributionText?: string;
    attributionHTML?: string;
    code?: number;
    copyright?: string;
    data?: ComicDataContainer;
    etag?: string;
    status?: string;
}
export interface ComicDataContainer {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results?: Comic[];
  }
  
  export interface Comic {
    id?: number;
    digitalId?: number;
    title?: string;
    issueNumber?: number;
    variantDescription?: string;
    description?: string;
    modified?: Date;
    isbn?: string;
    upc?: string;
    diamondCode?: string;
    ean?: string;
    issn?: string;
    format?: string;
    pageCount?: number;
    textObjects?: TextObject[];
    resourceURI?: string;
    urls?: Url[];
    series?: SeriesSummary;
    variants?: ComicSummary[];
    collections?: ComicSummary[];
    collectedIssues?: ComicSummary[];
    dates?: ComicDate[];
    prices?: ComicPrice[];
    thumbnail?: Image;
    images?: Image[];
  }
  
  export interface TextObject {
    type?: string;
    language?: string;
    text?: string;
  }
  
  export interface Url {
    type?: string;
    url?: string;
  }
  
  export interface SeriesSummary {
    resourceURI?: string;
    name?: string;
  }
  
  export interface ComicSummary {
    resourceURI?: string;
    name?: string;
  }
  
  export interface ComicDate {
    type?: string;
    date?: Date;
  }
  
  export interface ComicPrice {
    type?: string;
    price?: number;
  }
  export interface Image {
    path?: string;
    extension?: string;
  }