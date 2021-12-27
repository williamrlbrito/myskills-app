describe('Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('check register a new skill', async () => {
    const inputNew = element(by.id('input-new'));
    const buttonAdd = element(by.id('button-add'));

    await inputNew.tap();
    await inputNew.typeText('React JS');
    await buttonAdd.tap();

    await inputNew.typeText('React Native');
    await buttonAdd.tap();
  });
});
