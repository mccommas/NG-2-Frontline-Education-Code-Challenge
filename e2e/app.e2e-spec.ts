import { FrontlineEducationCodeChallengePage } from './app.po';

describe('frontline-education-code-challenge App', () => {
  let page: FrontlineEducationCodeChallengePage;

  beforeEach(() => {
    page = new FrontlineEducationCodeChallengePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
