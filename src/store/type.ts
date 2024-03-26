export interface NewsItem {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface State {
  data: NewsItem[];
  outputSegment: NewsItem[];
  error: {
    status: boolean;
    errorMessage: string;
  };
  loading: boolean;
  numberOfPages: number;
  homePage: number;
  numberOfRecords: number;
}

export interface StateSelector {
  rootReducer: {
    newsReducer: State;
  };
}

export interface UrlParam {
  id: string;
}

export interface UpdateAction {
  payload: UrlParam;
  type: string;
}
