export type Metric = {
  value: string;
  label: string;
  note?: string;
};

export type ArchitectureLayer = {
  label: string;
  nodes: string[];
};

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  summary: string;
  year: string;
  role: string;
  /** Shown verbatim on the card and the case page. */
  status: string;
  featured: boolean;
  /** Bento span on the home grid. */
  span: "wide" | "narrow" | "half";
  stack: string[];
  context: string;
  problem: string;
  built: string[];
  architecture: {
    caption: string;
    layers: ArchitectureLayer[];
  };
  decisions: { title: string; body: string }[];
  results: Metric[];
  links?: { label: string; href: string }[];
};

export type SideProject = {
  name: string;
  blurb: string;
  stack: string;
  href?: string;
};

export type ExperienceEntry = {
  company: string;
  href?: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type Capability = {
  index: string;
  title: string;
  body: string;
  points: string[];
};
