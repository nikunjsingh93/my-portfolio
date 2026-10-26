import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';
import { projects } from './content';

describe('Recruiter reading path', () => {
  it('makes every project and its case study readable without extra interaction', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Engineering');
    for (const project of projects) {
      const article = screen.getByRole('article', { name: project.name });
      expect(article).toBeVisible();
      expect(within(article).getByText(project.challenge)).toBeVisible();
      expect(within(article).getByText(project.approach)).toBeVisible();
      expect(within(article).getByRole('link', { name: new RegExp(project.action) })).toHaveAttribute('href', project.url);
    }
    expect(screen.getByText(/Impact figures reported in my résumé/)).toBeVisible();
  });
  it('opens the mobile navigation, follows a section, and closes on Escape', async () => {
    const user = userEvent.setup(); render(<App />);
    const toggle = screen.getByRole('button', { name: 'Menu +' });
    await user.click(toggle); expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await user.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Work' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle); await user.keyboard('{Escape}');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
  it('offers real contact links and never shows a nonexistent résumé download', () => {
    render(<App />);
    expect(within(screen.getByRole('navigation')).getByRole('link', { name: 'LinkedIn ↗' })).toHaveAttribute('href', 'https://www.linkedin.com/in/nikunjsingh93/');
    expect(screen.queryByRole('link', { name: /résumé/i })).not.toBeInTheDocument();
    for (const link of screen.getAllByRole('link')) {
      const href = link.getAttribute('href')!;
      if (href.startsWith('#') && href !== '#') expect(document.getElementById(href.slice(1))).not.toBeNull();
      if (link.getAttribute('target') === '_blank') expect(link).toHaveAttribute('rel', 'noreferrer');
    }
  });
});

