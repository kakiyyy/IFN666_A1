const taxons = [];

exports.getAll = async (req, res) => {
  res.json(taxons);
};

exports.get = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.sendStatus(400);
  }

  const taxon = taxons.find((t) => t.taxonomy_id === id);

  if (!taxon) {
    return res.sendStatus(204);
  }

  res.json(taxon);
};

exports.create = async (req, res) => {
  const { scientific_name, common_name, taxonomy_id } = req.body;

  if (!scientific_name || !common_name || !taxonomy_id) {
    return res.sendStatus(400);
  }

  const existing = taxons.find((t) => t.taxonomy_id === taxonomy_id);

  if (existing) {
    return res.sendStatus(409);
  }

  const newTaxon = {
    scientific_name,
    common_name,
    taxonomy_id,
  };

  taxons.push(newTaxon);

  res.status(201).json(newTaxon);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { scientific_name, common_name } = req.body;

  if (!id) {
    return res.sendStatus(400);
  }

  if (!scientific_name || !common_name) {
    return res.sendStatus(400);
  }

  const taxon = taxons.find((t) => t.taxonomy_id === id);

  if (!taxon) {
    return res.sendStatus(204);
  }

  taxon.scientific_name = scientific_name;
  taxon.common_name = common_name;

  res.status(200).json(taxon);
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.sendStatus(400);
  }

  const index = taxons.findIndex((t) => t.taxonomy_id === id);

  if (index === -1) {
    return res.sendStatus(204);
  }

  const deletedTaxon = taxons.splice(index, 1)[0];

  res.status(200).json(deletedTaxon);
}