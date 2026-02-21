export interface Imagen {
  id: number;
  name: string;
  alternativeText: string | null;
  url: string;
}
export interface Link {
  id: number;
  label: string;
  url: string;
  isButton: boolean;
  isExternal: boolean;
  type?: "PRIMARY" | "SECONDARY";
}
export interface TopBar {
  id: number;
  isVisible: boolean;
  text: string;
  link: Link;
}

export interface Logo {
  id: number;
  label: string;
  imagen: Imagen;
}
export interface HeaderTop {
  id: number;
  logo: Logo;
  headerLink: Link[];
  button: Link[];
}
export interface MenuItem {
  id: number;
  link: Link;
  item: Link[];
}
export interface Menu {
  id: number;
  menuItems: MenuItem[];
}

export interface Global {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  topBar: TopBar;
  headerTop: HeaderTop;
  menu: Menu;
}

export interface StrapíResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
