export interface ChractersResults {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: Url[];
  thumbnail?: Image;
  comics?: ComicList;
  stories?: StoryList;
  events?: EventList;
  series?: SeriesList;
}

export interface Url {
    type?: string;
    url?: string;
  }
  
  export  interface Image {
    path?: string;
    extension?: string;
  }
  
  export interface ComicList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: ComicSummary[];
  }
  
  export interface StoryList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: StorySummary[];
  }
  
  export interface EventList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: EventSummary[];
  }
  
  export interface SeriesList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: SeriesSummary[];
  }
  
  export interface ComicSummary {
    resourceURI?: string;
    name?: string;
  }
  
  export interface StorySummary {
    resourceURI?: string;
    name?: string;
    type?: string;
  }
  
  export interface EventSummary {
    resourceURI?: string;
    name?: string;
  }
  
  export interface SeriesSummary {
    resourceURI?: string;
    name?: string;
  }