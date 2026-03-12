const taxons = [];

exports.getAll = async (req, res) => {
    // Put your code here
};

exports.get = async (req, res) => {
    const { id } = req.params;

    // Put your code here
};

exports.create = async (req, res) => {
    const { scientific_name, common_name, taxonomy_id } = req.body;

    // Put your code here
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { scientific_name, common_name } = req.body;

    // Put your code here
};

exports.delete = async (req, res) => {
    const { id } = req.params;

    // Put your code here
};