module.exports = routeValidation = (req, res, next) => {
    
    const { amount, week, base_currency, target_currency} = req.body

    if(!base_currency){
        res.send({
            message: "field missing",
            field: "base_currency" 
        })
    }

    if(!target_currency){
        res.send({
            message: "field missing",
            field: "target_currency" 
        })
    }

    if(!week){
        res.send({
            message: "field missing",
            field: "week" 
        })
    }

    next();
};



