import { RaRecord } from "react-admin";

export interface Category extends RaRecord {
  name: string;
}

export interface Tag extends RaRecord {
  tagName: string[];
  id: string
}


export interface Product extends RaRecord {
  id: string | number;
  fileId: string;
  originalName: string;
  path: string;
  size: string;
  status: string;
  type: string;
  fileUrl: string;
  tagName: string[]
}
