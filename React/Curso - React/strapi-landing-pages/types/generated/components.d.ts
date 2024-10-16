import type { Struct, Schema } from '@strapi/strapi';

export interface SectionTextGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text-grid';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_section_s';
  info: {
    displayName: 'section__';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    text_grid: Schema.Attribute.Component<'section.text-grid', true> &
      Schema.Attribute.Required;
    image_grid: Schema.Attribute.Component<'section.image-grid', true> &
      Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false>;
  };
}

export interface SectionSectionTwoColumns extends Struct.ComponentSchema {
  collectionName: 'components_section_section_two_columns';
  info: {
    displayName: 'section_two_columns';
    icon: 'code';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionSectionMetadata extends Struct.ComponentSchema {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'apps';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    section_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    background: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionSectionGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_section_grids';
  info: {
    displayName: 'section_grid';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    text_grid: Schema.Attribute.Component<'section.text-grid', true>;
    image_grid: Schema.Attribute.Component<'section.image-grid', true>;
    metadata: Schema.Attribute.Component<'section.section-metadata', false>;
  };
}

export interface SectionSectionContent extends Struct.ComponentSchema {
  collectionName: 'components_section_section_contents';
  info: {
    displayName: 'section_content';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionImageGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_image_grids';
  info: {
    displayName: 'image-grid';
    icon: 'apps';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'menu';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    logo_link: Schema.Attribute.Text & Schema.Attribute.Required;
    logo_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    menu_links: Schema.Attribute.Component<'menu.menu-link', true> &
      Schema.Attribute.Required;
  };
}

export interface MenuMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menu_link';
    icon: 'arrowUp';
  };
  attributes: {
    link_text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    open_in_new_tab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.text-grid': SectionTextGrid;
      'section.section': SectionSection;
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-grid': SectionSectionGrid;
      'section.section-content': SectionSectionContent;
      'section.image-grid': SectionImageGrid;
      'menu.menu': MenuMenu;
      'menu.menu-link': MenuMenuLink;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
    }
  }
}
