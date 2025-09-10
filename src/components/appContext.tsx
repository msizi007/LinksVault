import { createContext } from "react";
import React from "react";
import type { _Tag, _Bookmark, CrudMode } from "./types";

interface AppContextType {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  bookmarks: _Bookmark[];
  setBookmarks: React.Dispatch<React.SetStateAction<_Bookmark[]>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  tags: _Tag[];
  setTags: React.Dispatch<React.SetStateAction<_Tag[]>>;
  mode: CrudMode;
  setMode: React.Dispatch<React.SetStateAction<CrudMode>>;
  updated: string;
  setUpdated: React.Dispatch<React.SetStateAction<string>>;
  toggleTag(tag: _Tag): void;
  addLink(): void;
  updateLink(url: string): void;
  deleteLink(url: string): void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchItem(): void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
