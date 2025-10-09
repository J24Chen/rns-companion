'use client';

import { ItemCard } from './item-card';
import type { Item } from '@/lib/types';

interface ItemGridProps {
  items: Item[];
  onHoverItem: (item: Item | null) => void;
  onClickItem: (item: Item) => void;
}

export function ItemGrid({ items, onHoverItem, onClickItem }: ItemGridProps) {
  return (
    <div
      className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-16 gap-2"
      onMouseLeave={() => onHoverItem(null)}
    >
      {items.map((item) => (
        <div 
          key={item.id} 
          onMouseEnter={() => onHoverItem(item)}
          onClick={() => onClickItem(item)}
          className="cursor-pointer"
        >
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}
