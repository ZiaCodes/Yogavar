exports.parseData = (req, res, next) =>{
    const {trailer, cast, generes, tags, writers } = req.body;

    if(trailer) req.body.trailer = JSON.parse(trailer);
    if(cast) req.body.cast = JSON.parse(cast);
    if(generes) req.body.generes = JSON.parse(generes);

    if(tags) req.body.tags = JSON.parse(tags);
    if(writers) req.body.writers = JSON.parse(writers);

    next();
}