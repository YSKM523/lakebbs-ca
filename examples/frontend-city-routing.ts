// Representative routing helper from the lakebbs Next.js app.
// City-aware URLs of the form `/[city]/[section]` keep each city's
// information surface isolated and discoverable.

type CitySlug = 'thunderbay' | 'sudbury';

interface CityMeta {
  slug: CitySlug;
  label: string;
}

const CITY_META: Record<CitySlug, CityMeta> = {
  thunderbay: { slug: 'thunderbay', label: 'Thunder Bay' },
  sudbury: { slug: 'sudbury', label: 'Sudbury' },
};

export function normalizeCitySlug(value: string = ''): CitySlug {
  const city = value.trim().toLowerCase() as CitySlug;
  return CITY_META[city] ? city : 'thunderbay';
}

export function buildCityPath(
  citySlug: string = 'thunderbay',
  section: string = 'freshNews',
): string {
  const city = normalizeCitySlug(citySlug);
  const sectionKey = section.trim() || 'freshNews';
  return city === 'all' ? `/${sectionKey}` : `/${city}/${sectionKey}`;
}

export function buildCityMeta(citySlug: string = 'thunderbay') {
  const city = CITY_META[normalizeCitySlug(citySlug)];
  return {
    title: `${city.label} | lakebbs`,
    description: `City-specific community surface for ${city.label} rentals, jobs, second-hand listings, and local discussion.`,
  };
}
