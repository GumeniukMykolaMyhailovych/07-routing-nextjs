'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import css from './SidebarNotes.module.css';

const tags = ['all', 'todo', 'work', 'personal', 'meeting', 'shopping'];

export default function SidebarNotes() {
  const pathname = usePathname();

  const isActive = (tag: string) => {
    return pathname === `/notes/filter/${tag}`;
  };

  return (
    <ul className={css.menuList}>
      {tags.map(tag => (
        <li key={tag} className={css.menuItem}>
          <Link
            href={`/notes/filter/${tag}`}
            className={clsx(
              css.menuLink,
              isActive(tag) && css.active
            )}
          >
            {tag === 'all'
              ? 'All notes'
              : tag.charAt(0).toUpperCase() + tag.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  );
}