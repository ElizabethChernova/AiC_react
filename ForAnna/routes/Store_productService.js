
const {Store_ProductDao, dao} = require("../dao/store_productDao");

exports.Store_productRouter = class {

    constructor() {
    }

    getAllStore_product(req, res) {
        (async () => {
            res.json(await dao.getAllStore_product())
        })()
    }

    getStoreProduct(req, res) {
        let internalDAO = dao
        if (req.params.upc) {
            (async () => {
                res.json(await internalDAO.getStoreProduct(req.params.upc))

            })()
        } else {
            res.sendStatus(400)
        }
    }

    addStore_product(req, res) {
        if (req.body.upc_prom && req.body.id_product && req.body.selling_price && req.body.products_number && req.body.promotional_product) {
            (async () => {
                await dao.addStore_product(req.body.upc_prom, req.body.id_product, req.body.selling_price, req.body.products_number, req.body.promotional_product)
                res.send(req.body)
            })()
        } else {
            console.log("err" )
        }
    }

    deleteStore_product(req, res) {
        let internalDAO = dao
        if (req.params.upc) {
            (async () => {
                await internalDAO.deleteStore_product(req.params.upc)
                res.send("Success")
            })()
        } else {
            res.sendStatus(400)
        }
    }

    updateStore_product(req, res) {
        let internalDAO = dao
        if (req.body.upc && req.body.upc_prom && req.body.id_product && req.body.selling_price && req.body.products_number && req.body.promotional_product) {
            (async () => {
                await internalDAO.updateStore_product(req.body.upc, req.body.upc_prom, req.body.id_product, req.body.selling_price, req.body.products_number, req.body.promotional_product)
                res.status(200).send("Success")
            })()
        } else {
            res.sendStatus(400);   }
    }

    getAllStore_productWithProductCharacteristics(req, res) {
        (async () => {
            res.json(await dao.getAllStore_productWithProductCharacteristics())
        })()
    }

}