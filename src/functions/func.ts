interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
}

import { destinationsData } from "../data/destination.json";

export const shuffledDestinations: Destination[] = destinationsData
  .map((item: Destination) => ({ item, sort: Math.random() })) // Tipe `item` sudah diberikan
  .sort(
    (
      a: { item: Destination; sort: number },
      b: { item: Destination; sort: number }
    ) => a.sort - b.sort
  )
  .map(({ item }: { item: Destination }) => item);
