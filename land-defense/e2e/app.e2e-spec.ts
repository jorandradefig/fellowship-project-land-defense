import { LandDefensePage } from './app.po';

describe('land-defense App', () => {
  let page: LandDefensePage;

  beforeEach(() => {
    page = new LandDefensePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
