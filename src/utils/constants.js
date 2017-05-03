const api = {
  API_URL: process.env.API_URL,
  API_KEY: process.env.API_KEY
}

const ui = {
  sidebarWidth: 325,
  defaultBudget: 5000,
  breakpoints: { desktop: 992, tablet: 768, mobile: 376 }
}

const color = {
  primary: '#FF7270',
  primaryDark: '#c74949',
  secondary: '#a9a9a9',
  grey: '#F6F6F6',
  greyDark: '#EBEBEB'
}

const interests = [
  { type: 'gaming', label: 'Video gaming' },
  { type: 'exercise', label: 'Fitness' },
  { type: 'travel', label: 'Travelling' },
  { type: 'nature', label: 'Nature' },
  { type: 'bike', label: 'Cycling' },
  { type: 'art', label: 'Creative' },
  { type: 'health', label: 'Health' },
  { type: 'baby', label: 'Parenting' },
  { type: 'camping', label: 'Camping' },
  { type: 'music', label: 'Music ' },
  { type: 'cooking', label: 'Cooking' },
  { type: 'animal', label: 'Animals' }
]

const text = {
  home: {
    title: 'Looking to buy the perfect gift?',
    // (describe intro relations with humours situations)
    intro: 'Whether it’s for your boyfriend, wife, husband or girlfriend we’ll help you find the right gift for them.',
    cta: 'Find your gift',
    amazon: 'foundyourgift is a participant in the Amazon EU Associates Programme, an affiliate advertising programme designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.co.uk',
    amazon2: "CERTAIN CONTENT THAT APPEARS [IN THIS APPLICATION or ON THIS SITE, as applicable] COMES FROM AMAZON EU S.à r.l. THIS CONTENT IS PROVIDED 'AS IS' AND IS SUBJECT TO CHANGE OR REMOVAL AT ANY TIME."
  },
  search: {
    intro: 'Whether it’s for your boyfriend, wife, husband or girlfriend we’ll help you find the right gift for them.',
    noResultsTitle: 'All gone!',
    noResultsBody: "Sorry, but there's no more results available. Try increasing your budget, or changing your search terms."
  },
  warning: 'Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on [relevant Amazon Site(s), as applicable] at the time of purchase will apply to the purchase of this product.'
}
export default { color, interests, text, api, ui }
