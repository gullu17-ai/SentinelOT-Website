import StructuredData from './StructuredData';
import { pageEntities } from '@/lib/structured-data';

export default function PageSchema({ name, path, description }: { name: string; path: string; description: string }) {
  return <StructuredData data={pageEntities(name, path, description)} />;
}
