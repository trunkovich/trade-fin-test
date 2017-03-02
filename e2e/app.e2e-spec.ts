import { TradeFinPage } from './app.po';

describe('trade-fin App', () => {
  let page: TradeFinPage;

  beforeEach(() => {
    page = new TradeFinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
