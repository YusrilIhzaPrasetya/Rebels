exports.authorization = (roles) => (req, res, next) => {
    try {
        const currentUser = req.currentUser;
        if(!roles.includes(currentUser.role)){
            throw new Error ('unauthorize access');
        }
        next();
    } catch (error) {
        next(error)
    }
   

}