import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutHeaderTop extends Struct.ComponentSchema {
  collectionName: 'components_layout_header_tops';
  info: {
    displayName: 'header-top';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', true>;
    headerLink: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
  };
}

export interface LayoutMenu extends Struct.ComponentSchema {
  collectionName: 'components_layout_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    menuItems: Schema.Attribute.Component<'shared.menu-item', true>;
  };
}

export interface LayoutTopBar extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_bars';
  info: {
    displayName: 'top-bar';
  };
  attributes: {
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    link: Schema.Attribute.Component<'shared.link', false>;
    text: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    isButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
    url: Schema.Attribute.String;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'logo-link';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    displayName: 'menu-item';
  };
  attributes: {
    item: Schema.Attribute.Component<'shared.link', true>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.header-top': LayoutHeaderTop;
      'layout.menu': LayoutMenu;
      'layout.top-bar': LayoutTopBar;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.menu-item': SharedMenuItem;
    }
  }
}
