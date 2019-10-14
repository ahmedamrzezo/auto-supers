class Url {
  path: string[];
  params: Object;
}

export interface Breadcrumb {
  name: string;
  url: Url;
}
