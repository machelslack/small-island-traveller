export const homePage = {
  screens: [
    {
      id: 'ROOT',
      screenProperties: {},
      layout: {
        wide: {},
        compact: {
          type: 'SingleColumnLayout',
          main: {
            type: 'MultipleSectionsPlacement',
            sectionDetails: [
              {
                sectionId: 'hero_section',
              },
              {
                sectionId: 'title_section',
              },
            ],
          },
          nav: {
            type: 'SingleSectionPlacement',
            sectionDetail: {
              sectionId: 'toolbar_section',
            },
          },
          footer: {
            type: 'SingleSectionPlacement',
            sectionDetail: {
              sectionId: 'book_bar_footer',
            },
          },
        },
      },
    },
  ],
  sections: [
    {
      id: 'toolbar_section',
      sectionComponentType: 'TOOLBAR',
      section: {
        type: 'ToolbarSection',
        nav_button: {
          onClickAction: {
            type: 'NavigateBack',
            screenId: 'previous_screen_id',
          },
        },
      },
    },
    {
      id: 'hero_section',
      sectionComponentType: 'HERO',
      section: {
        type: 'HeroSection',
        images: [],
      },
    },
    {
      id: 'title_section',
      sectionComponentType: 'TITLE',
      section: {
        type: 'TitleSection',
        title: 'Seamist Beach Cottage, Private Beach & Ocean Views',
        titleStyle: {},
      },
    },
    {
      id: 'book_bar_footer',
      sectionComponentType: 'BOOK_BAR_FOOTER',
      section: {
        type: 'ButtonSection',
        title: '$450/night',
        button: {
          text: 'Check Availability',
          onClickAction: {
            type: 'NavigateToScreen',
            screenId: 'next_screen_id',
          },
        },
      },
    },
  ],
};
