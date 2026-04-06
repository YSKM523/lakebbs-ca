const CITY_META = {
  thunderbay: { slug: 'thunderbay', label: 'Thunder Bay' },
  sudbury: { slug: 'sudbury', label: 'Sudbury' },
};

export function normalizeCitySlug(value = '') {
  const city = String(value || '').trim().toLowerCase();
  return CITY_META[city] ? city : 'thunderbay';
}

export function buildCityPath(citySlug = 'thunderbay', section = 'freshNews') {
  const city = normalizeCitySlug(citySlug);
  const sectionKey = String(section || '').trim() || 'freshNews';
  return city === 'all' ? `/${sectionKey}` : `/${city}/${sectionKey}`;
}

export function buildCityMeta(citySlug = 'thunderbay') {
  const city = CITY_META[normalizeCitySlug(citySlug)];
  return {
    title: `${city.label} | lakebbs`,
    description: `City-specific community surface for ${city.label} rentals, jobs, second-hand listings, and local discussion.`,
  };
}
