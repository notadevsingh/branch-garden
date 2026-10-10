/**
 * Everything about you lives here. Replace all of it.
 *
 * Nothing else in the codebase hard-codes a name, a link or an email. Template
 * wording (button labels, headings) lives in lib/copy.ts; if you find a fact
 * about a person anywhere else, it is a bug.
 */
export const site = {
  name: 'Your Name',
  role: 'Your Role / Discipline',

  /** The headline on the home page. No full stop; one is added for you. */
  title: 'A holistic view of my work and the things that grew beside it',

  /**
   * Two or three sentences under the headline. Say what the site is and how to
   * read it. Do not count the branches here; the page does that itself.
   */
  description:
    'A personal portfolio and digital garden organized into branches of craft, curiosity, and experience. Explore the branches to see how different threads develop across time.',

  /** Used for canonical URLs and link previews. Set it to the real address. */
  url: 'https://example.com',
  email: 'hello@example.com',

  /** Rendered in the footer, in this order. */
  links: [
    { label: 'GitHub', href: 'https://github.com/yourname' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
  ],
} as const;
