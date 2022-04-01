describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the hello message', async () => {
    await expect(element(by.id('hello'))).toBeVisible();
    await expect(element(by.text('Hello, Detox!'))).toBeVisible();
  });

  it('should allow tapping', async () => {
    await element(by.id('mybutton')).tap();
    await element(by.text('Press Me')).tap();
  });
});
