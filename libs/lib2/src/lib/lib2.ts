import { lib1 } from '@my-org/lib1';

export function lib2(): string {
  return `lib2 imported ${lib1()}`;
}
