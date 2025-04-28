import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils/utils';

describe('Utils functions', () => {
  test('getCurrentYear returns the current year', () => {
    const year = getCurrentYear();
    expect(year).toBe(new Date().getFullYear());
  });

  test('getFooterCopy returns correct string when true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns correct string when false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns expected HTML string', () => {
    const notification = getLatestNotification();
    expect(notification).toContain('<strong>Urgent requirement</strong>');
    expect(notification).toMatch(/complete by EOD/i);
  });
});

