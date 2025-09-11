export interface _Bookmark {
  title: string;
  url: string;
  description: string;
  tags?: _Tag[];
}
export interface _Tag {
  name: string;
  isActive: boolean;
}

export type CrudMode = "UPDATE" | "CREATE" | "SEARCH";
