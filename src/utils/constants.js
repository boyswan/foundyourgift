const api = {
  API_URL: 'https://gfqrcx7vjd.execute-api.us-east-1.amazonaws.com/foundyourgift',
  API_KEY: 'QuHdJW22No1T0vvZ7pzU9kTfDCXcc3l84wqXJLSb'
}

const color = {
  primary: '#F15959',
  primaryDark: '#c74949',
  secondary: '#4674AB',
  grey: '#F6F6F6',
  greyDark: '#EBEBEB'
}

const interests = [
 { type: 'business', label: 'Entreprenurial' },
 { type: 'exercise', label: 'Fitness fanatic' },
 { type: 'gaming', label: 'Video gamer' },
 { type: 'health', label: 'Nature lover' },
 { type: 'sports', label: 'Sports fan' },
 { type: 'travel', label: 'Traveller' },
 { type: 'arts', label: 'Creative' },
 { type: 'tech', label: 'Tech geek' },
 { type: 'music', label: 'Sound person' }
]

const text = {
  home: {
    title: "Looking to buy the perfect gift?",
    // (describe intro relations with humours situations)
    intro: "Whether it’s for your boyfriend, wife, husband or girlfriend we’ll help you find the right gift for them.",
    cta: "Get started",
    amazon: "foundyourgift is a participant in the Amazon EU Associates Programme, an affiliate advertising programme designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.co.uk",
    amazon2: "CERTAIN CONTENT THAT APPEARS [IN THIS APPLICATION or ON THIS SITE, as applicable] COMES FROM AMAZON EU S.à r.l. THIS CONTENT IS PROVIDED 'AS IS' AND IS SUBJECT TO CHANGE OR REMOVAL AT ANY TIME."
  },
  search: {
    intro: "Whether it’s for your boyfriend, wife, husband or girlfriend we’ll help you find the right gift for them.",
    noResultsTitle: "All gone!",
    noResultsBody: "Sorry, but there's no more results available. Try increasing your budget, or changing your search terms."
  }

}

export default {
  color,
  interests,
  text,
  api
}
