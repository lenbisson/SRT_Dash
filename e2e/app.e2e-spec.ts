import { Section508frontPage } from './app.po';

describe('section508front App', function() {
  let page: Section508frontPage;

  beforeEach(() => {
    page = new Section508frontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
