const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('C:/Users/nhqkb/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright');
const output = path.resolve('.impeccable/review');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  const pageErrors = [];
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'no-preference' });
    const page = await context.newPage();
    page.on('pageerror', (error) => pageErrors.push(error.message));
    const response = await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    assert.equal(response.status(), 200);
    const header = page.locator('header[data-floating]');
    const shell = header.locator(':scope > div');
    const hero = page.locator('#about');
    await hero.getByRole('heading', { level: 1 }).waitFor();
    await page.evaluate(() => document.fonts.ready);
    await hero.locator('img').evaluate((image) => image.complete ? Promise.resolve() : new Promise((resolve) => { image.addEventListener('load', resolve, { once: true }); image.addEventListener('error', resolve, { once: true }); setTimeout(resolve, 10000); }));
    assert.equal(await hero.locator('img').evaluate((image) => image.complete && image.naturalWidth > 0), true);
    assert.equal((await hero.getByRole('heading', { level: 1 }).innerText()).replace(/\s+/g, ' '), 'I build web, mobile, and connected systems.');
    assert.equal(await hero.getByRole('link', { name: 'View selected work', exact: true }).getAttribute('href'), '#projects');
    assert.equal(await hero.getByRole('link', { name: 'Get in touch', exact: true }).getAttribute('href'), '#contact');
    assert.equal(await page.locator('#tech h4').count(), 6);
    assert.equal(await page.locator('#tech').getByRole('button', { name: 'All, 22 technologies', exact: true }).count(), 1);
    results.push('Approved hero copy, primary/secondary anchors, loaded portrait, 6 initial stack items and 22 technology total preserved');

    async function scroll(y, floating) {
      await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
      await page.waitForTimeout(50);
      if (floating !== undefined) {
        await page.waitForFunction((value) => document.querySelector('header[data-floating]').dataset.floating === String(value), floating);
      }
    }
    async function measurements() {
      return header.evaluate((element) => {
        const shell = element.firstElementChild;
        const rect = shell.getBoundingClientRect();
        const style = getComputedStyle(shell);
        const visible = [...element.querySelectorAll('a,button')].filter((control) => control.getBoundingClientRect().height > 0 && getComputedStyle(control).visibility !== 'hidden' && !control.closest('[inert]'));
        return { viewport: innerWidth, floating: element.dataset.floating, width: rect.width, left: rect.left, right: rect.right, top: rect.top, radius: style.borderTopLeftRadius, background: style.backgroundColor, blur: style.backdropFilter, transition: style.transitionDuration, headerHeight: element.getBoundingClientRect().height, heroDocumentTop: document.getElementById('about').getBoundingClientRect().top + scrollY, pageOverflow: document.documentElement.scrollWidth > innerWidth, minControlHeight: Math.min(...visible.map((control) => control.getBoundingClientRect().height)) };
      });
    }

    for (const config of [{ width: 1440, name: 'hero-desktop' }, { width: 1567, name: 'hero-user-1567' }, { width: 1024, name: 'hero-small-desktop' }, { width: 768, name: 'hero-tablet' }, { width: 390, name: 'hero-mobile' }, { width: 360, name: 'hero-mobile-360' }]) {
      await page.setViewportSize({ width: config.width, height: 1000 });
      await scroll(0, false);
      await page.waitForTimeout(450);
      const top = await measurements();
      assert.equal(top.pageOverflow, false);
      assert.equal(top.radius, '0px');
      assert.ok(Math.abs(top.width - config.width) < 1);
      assert.ok(top.minControlHeight >= 44);
      assert.equal(await header.getByRole('link', { name: 'Resume (opens in a new tab)', exact: true }).count(), 1);
      assert.equal(await header.getByRole('navigation', { name: 'Main navigation', exact: true }).isVisible(), config.width >= 1024);
      await page.screenshot({ path: path.join(output, config.name + '-top.png'), animations: 'disabled' });
      if ([1440, 390].includes(config.width)) await page.screenshot({ path: path.join(output, config.name + '-full.png'), fullPage: true, animations: 'disabled' });
      await scroll(240, true);
      await page.waitForTimeout(450);
      const floating = await measurements();
      assert.equal(floating.pageOverflow, false);
      assert.ok(floating.left >= (config.width >= 768 ? 24 : 12) - 1);
      assert.ok(floating.right <= config.width - (config.width >= 768 ? 24 : 12) + 1);
      assert.equal(floating.radius, config.width >= 768 ? '24px' : '20px');
      assert.equal(floating.top, config.width >= 768 ? 12 : 8);
      assert.equal(floating.headerHeight, top.headerHeight);
      assert.equal(floating.heroDocumentTop, top.heroDocumentTop);
      assert.equal(floating.blur, 'blur(18px)');
      assert.ok(floating.minControlHeight >= 44);
      await page.screenshot({ path: path.join(output, config.name + '-floating.png'), animations: 'disabled' });
      results.push({ viewport: config.width, top, floating });
    }

    await page.setViewportSize({ width: 1440, height: 1000 });
    await scroll(0, false);
    await page.waitForTimeout(450);
    const sameShell = await shell.elementHandle();
    const resume = header.getByRole('link', { name: 'Resume (opens in a new tab)', exact: true });
    await resume.focus();
    await scroll(70, true);
    await scroll(40, true);
    await scroll(16, false);
    await scroll(40, false);
    await scroll(64, true);
    assert.equal(await resume.evaluate((element) => element === document.activeElement), true);
    assert.equal(await sameShell.evaluate((element) => element === document.querySelector('header[data-floating] > div')), true);
    results.push('64/16px hysteresis works; same mounted navbar and keyboard focus retained');

    await scroll(0, false);
    await page.waitForTimeout(450);
    await scroll(200, true);
    const mid = await measurements();
    assert.ok(parseFloat(mid.radius) > 0 && parseFloat(mid.radius) < 24, 'Morph has an intermediate rounded frame');
    for (const y of [0, 200, 0, 200, 0]) await scroll(y, y > 0);
    await page.waitForTimeout(450);
    assert.equal((await measurements()).radius, '0px');
    results.push({ animation: 'Intermediate shape and rapid reversible transitions verified', midpointRadius: mid.radius });

    await page.setViewportSize({ width: 390, height: 1000 });
    await scroll(0, false);
    const menuButton = header.getByRole('button', { name: 'Open navigation menu', exact: true });
    await menuButton.click();
    const mobileNav = header.getByRole('navigation', { name: 'Mobile navigation', exact: true });
    await mobileNav.getByRole('link', { name: 'Work', exact: true }).waitFor({ state: 'visible' });
    await mobileNav.getByRole('link', { name: 'Work', exact: true }).focus();
    await scroll(240, true);
    assert.equal(await header.getByRole('button', { name: 'Close navigation menu', exact: true }).getAttribute('aria-expanded'), 'true');
    assert.equal(await mobileNav.getByRole('link', { name: 'Work', exact: true }).evaluate((element) => element === document.activeElement), true);
    await page.waitForTimeout(450);
    await page.screenshot({ path: path.join(output, 'hero-mobile-menu.png'), animations: 'disabled' });
    await page.keyboard.press('Escape');
    assert.equal(await menuButton.getAttribute('aria-expanded'), 'false');
    assert.equal(await menuButton.evaluate((element) => element === document.activeElement), true);
    await menuButton.click();
    await page.mouse.click(5, 500);
    assert.equal(await menuButton.getAttribute('aria-expanded'), 'false');
    await menuButton.click();
    await mobileNav.getByRole('link', { name: 'Work', exact: true }).click();
    assert.equal(await menuButton.getAttribute('aria-expanded'), 'false');
    await page.waitForFunction(() => location.hash === '#projects');
    await page.waitForTimeout(800);
    assert.equal(await header.locator('nav[aria-label="Mobile navigation"] a[href="#projects"]').getAttribute('aria-current'), 'location');
    await menuButton.click();
    await page.setViewportSize({ width: 1024, height: 1000 });
    await page.waitForTimeout(100);
    await page.setViewportSize({ width: 390, height: 1000 });
    await page.waitForTimeout(100);
    assert.equal(await menuButton.getAttribute('aria-expanded'), 'false');
    results.push('Mobile disclosure: scroll/focus preservation, Escape focus return, outside click, section link, active state, and desktop resize close');

    const reducedContext = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    const reducedPage = await reducedContext.newPage();
    await reducedPage.goto('http://localhost:3000/#tech', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await reducedPage.waitForFunction(() => document.querySelector('header[data-floating]').dataset.floating === 'true');
    const reducedDurations = await reducedPage.locator('header[data-floating] > div').evaluate((element) => getComputedStyle(element).transitionDuration.split(',').map(parseFloat));
    assert.ok(reducedDurations.every((seconds) => seconds <= 0.00001));
    results.push('Deep-link initial floating state and reduced-motion path verified');
    const pdf = await context.request.get('http://localhost:3000/resume.pdf');
    assert.equal(pdf.status(), 200);
    assert.match(pdf.headers()['content-type'], /pdf/);
    results.push('Existing resume PDF resolves successfully');
    assert.deepEqual(pageErrors, []);
    const report = { passed: true, results, pageErrors };
    fs.writeFileSync(path.join(output, 'hero-nav-checks.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    fs.writeFileSync(path.join(output, 'hero-nav-checks.json'), JSON.stringify({ passed: false, results, pageErrors, error: error.stack }, null, 2));
    throw error;
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
