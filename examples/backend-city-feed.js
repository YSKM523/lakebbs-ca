function normalizeCitySlug(value = '') {
  const city = String(value || '').trim().toLowerCase();
  return city === 'sudbury' ? 'sudbury' : 'thunderbay';
}

function buildPostWhere(query = {}) {
  const where = {};
  const citySlug = normalizeCitySlug(query.citySlug);
  const section = String(query.section || '').trim();

  if (citySlug && citySlug !== 'all') {
    where.citySlug = citySlug;
  }

  if (section) {
    where.section = section;
  }

  return where;
}

async function listCityFeed(PostModel, query = {}) {
  const where = buildPostWhere(query);

  return PostModel.findAll({
    where,
    order: [['postTime', 'DESC']],
    limit: Number(query.limit || 20),
  });
}

module.exports = {
  buildPostWhere,
  listCityFeed,
};
