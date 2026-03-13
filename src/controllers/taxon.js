const taxons = [];

exports.getAll = async (req, res) => {
    // Put your code here
    if(taxons === null) return res.status(204).json({error: 'No Content'})

    return res.status(200).json(taxons);
};

exports.get = async (req, res) => {
        // Put your code here
    const { id } = req.params;
    if (!id) return res.status(400).json({error: 'Bad Request'})

    const taxon = taxons.find(t => t.taxonomy_id === id);
    if (!taxon) return res.status(204).json({error: 'No Content'})

    return res.status(200).json(taxons);
};

exports.create = async (req, res) => {
    const { scientific_name, common_name, taxonomy_id } = req.body;
    // Put your code here
    if (!scientific_name || !common_name || !taxonomy_id ) return res.status(400).json({error: 'Bad Request'})

    const existing = taxons.find(t => t.taxonomy_id === id);
    if(existing) return res.status(409).json({error: 'Conflict'})

    const newTaxon = {
        scientific_name,
        common_name,
        taxonomy_id
    };
    
    taxons.push(newTaxon);

    res.status(201).json(newTaxon);
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { scientific_name, common_name } = req.body;

    // Put your code here
    if (!id) return res.status(400).json({error: 'Bad Request'})
    
    const taxon = taxons.find(t => t.taxonomy_id === id);

    taxon.scientific_name = scientific_name;
    taxon.common_name = common_name;

    res.status(200).json(taxon);

};

exports.delete = async (req, res) => {
    const { id } = req.params;

    // Put your code here
    if (!id) return res.status(400).json({error: 'Bad Request'})
    
    const taxon = taxons.find(t => t.taxonomy_id === id);
    if (index === -1) {
        return res.status(204).json({error: 'No Content'})
    }

    taxons.splice(index, 1);

    res.status(200).json(taxon);
};