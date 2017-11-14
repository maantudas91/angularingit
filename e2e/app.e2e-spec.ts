import { FbHostTestPage } from './app.po';

describe('fb-host-test App', () => {
  let page: FbHostTestPage;

  beforeEach(() => {
    page = new FbHostTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
