const errorHandlerMiddleware = (err,req,res,next)=>{
    return res.status(500).json({err:`its from our side`})
}

module.exports = errorHandlerMiddleware;