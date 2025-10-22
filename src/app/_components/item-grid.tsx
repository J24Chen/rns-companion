'use client';

import { ItemCard } from './item-card';
import type { Item } from '@/lib/types';

interface ItemGridProps {
  items: Item[];
  onClickItem: (item: Item) => void;
}

export function ItemGrid({ items, onClickItem }: ItemGridProps) {
  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: 'repeat(auto-fit, 50px)' }}
    >
      {items.map((item) => (
        <div
          key={item.name}
          onClick={() => onClickItem(item)}
          className="cursor-pointer"
        >
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}
