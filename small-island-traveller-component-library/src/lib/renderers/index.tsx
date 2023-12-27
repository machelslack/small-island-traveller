const ScreenComponent = ({ children }: any) => (
  <div>'Screen Component' {children}</div>
);

interface ComponentMap {
  [key: string]: any;
}

const componentMap: ComponentMap = {
  SingleColumnLayout: ({ children }: any) => (
    <div>'Single Column Layout:' {children} </div>
  ),

  SingleSectionPlacement: ({ children }: any) => (
    <div>'Single Section Placement:'{children} </div>
  ),
  MultipleSectionsPlacement: ({ children }: any) => (
    <div>'Multiple Sections Placement:' {children} </div>
  ),
  TOOLBAR: ({ children }: any) => <div>'TOOLBAR:' {children}</div>,
  HERO: ({ children }: any) => <div>'HERO:' {children}</div>,
  TITLE: ({ children }: any) => <div>'TITLE:' {children}</div>,
  BOOK_BAR_FOOTER: ({ children }: any) => (
    <div>'BOOK_BAR_FOOTER:' {children}</div>
  ),
};

let sections;

// Interface representing a person
interface Section {
  id?: number;
  sectionComponentType: string;
  section?: any;
}

const findSectionById = (sections: any, sectionId: any): Section => {
  const section = sections.find((section: any) => section.id === sectionId);
  if (!section) {
    console.error(`Section with id "${sectionId}" not found.`);
  }
  return section;
};

interface LayoutComponent {
  sectionType: string;
  sectionDetails?: any;
}

const buildSection = (type: LayoutComponent) => {
  const { type: sectionType, sectionDetail, sectionDetails } = type;

  const Section = componentMap[sectionType];

  const layoutSectionDetails = sectionDetails || [sectionDetail];

  const sectionComponents = layoutSectionDetails.map((section: any) => {
    const foundSection: Section = findSectionById(sections, section.sectionId);
    const { id, sectionComponentType, section: sectionConfig } = foundSection;

    const SectionComponent = componentMap[sectionComponentType];
    if (!SectionComponent) {
      console.error(
        `Component for section type "${sectionComponentType}" not found.`
      );
      return null;
    }

    return <SectionComponent key={id} {...sectionConfig} />;
  });

  return <Section>{sectionComponents}</Section>;
};

const buildLayout = (layout: any) => {
  const {
    wide: { type: wideType, main: wideMain, nav: wideNav, footer: wideFooter },
    compact: {
      type: compactType,
      main: compactMain,
      nav: compactNav,
      footer: compactFooter,
    },
  } = layout;

  const nav = wideNav || compactNav;
  const footer = wideFooter || compactFooter;
  const type = wideType || compactType;
  const main = wideMain || compactMain;

  const Screen = componentMap[type];

  return (
    <Screen>
      {buildSection(nav)}
      {buildSection(main)}
      {buildSection(footer)}
    </Screen>
  );
};

const buildScreen = (screen: any) => {
  const { id, screenProperties, layout } = screen;

  // Assume ScreenComponent is a component
  return (
    <ScreenComponent key={id} {...screenProperties}>
      {layout && buildLayout(layout)}
    </ScreenComponent>
  );
};

export const buildTree = (config: any) => {
  sections = config.sections;
  const { screens } = config;
  const asd = screens.map(buildScreen);
  return asd;
};
