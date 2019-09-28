import { PJUIPage } from './app.po';

describe('pjui App', function() {
  let page: PJUIPage;

  beforeEach(() => {
    page = new PJUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
