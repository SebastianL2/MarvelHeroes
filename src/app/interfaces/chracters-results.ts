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

 interface Url {
    type?: string;
    url?: string;
  }
  
  interface Image {
    path?: string;
    extension?: string;
  }
  
  interface ComicList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: ComicSummary[];
  }
  
  interface StoryList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: StorySummary[];
  }
  
  interface EventList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: EventSummary[];
  }
  
  interface SeriesList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: SeriesSummary[];
  }
  
  interface ComicSummary {
    resourceURI?: string;
    name?: string;
  }
  
  interface StorySummary {
    resourceURI?: string;
    name?: string;
    type?: string;
  }
  
  interface EventSummary {
    resourceURI?: string;
    name?: string;
  }
  
  interface SeriesSummary {
    resourceURI?: string;
    name?: string;
  }