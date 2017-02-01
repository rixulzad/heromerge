import { HeroMergePage } from './app.po';

describe('hero-merge App', function() {
  let page: HeroMergePage;

  beforeEach(() => {
    page = new HeroMergePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
