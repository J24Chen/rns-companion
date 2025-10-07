
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">Welcome to the Item Explorer</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Your companion for Rabbit & Steel.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/items">Explore Items</Link>
        </Button>
      </div>
    </div>
  );
}
