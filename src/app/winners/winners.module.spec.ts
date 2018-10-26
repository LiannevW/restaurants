import { WinnersModule } from './winners.module';

describe('WinnersModule', () => {
  let winnersModule: WinnersModule;

  beforeEach(() => {
    winnersModule = new WinnersModule();
  });

  it('should create an instance', () => {
    expect(winnersModule).toBeTruthy();
  });
});
