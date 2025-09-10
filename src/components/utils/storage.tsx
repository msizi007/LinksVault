import type { _Bookmark } from "../types";

export function getLinks() {
  return JSON.parse(localStorage.getItem("linkVault") || "[]");
}

export function setLinks(links: _Bookmark[]) {
  localStorage.setItem("linkVault", JSON.stringify(links));
  return true;
}
