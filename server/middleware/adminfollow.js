const adminfollow = (req, res, next) => {
    if (!user.isadmin === "0") {
        res.status(403).send("just can follow !")
    }

    next()
}

export { adminfollow }