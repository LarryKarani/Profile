module.exports = {
  siteTitle: 'Larry Karani | Software Engineer',
  siteDescription:
    'Larry karani is a software engineer based in Nairobi, Kenya who specializes in the design and implementation of scalable, highly available software  in  React, React native, Javascript, Python, Flask and Django.',
  siteKeywords:
    'Larry, Karani, kubende, software engineer, software developer, backend engineer, React developer, React Native, Nairobi, Kenya',
  siteUrl: 'https://larrykarani.com',
  blogUrl: 'https://medium.com/@larrydev',
  siteLanguage: 'en_US',

  name: 'Larry Karani',
  location: 'Nairobi, Kenya',
  email: 'karanilarry@gmail.com',
  github: 'https://github.com/larrythegeek/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/larrythegeek/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/larry-karani/',
    },
    {
      name: 'Stackoverflow',
      url: 'https://stackoverflow.com/users/8821979/larry',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/larry_kubende/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/larrykubende',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@larrykubende',
  googleAnalyticsID: 'G-VWVD1NPTFN',
  googleTagManagerID: 'GTM-NMTR6BQ',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
