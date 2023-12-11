const adminControllers = {
    admin: (req, res) => res.send('Route for Admin View'),
    create: (req, res) => res.send('Route for create'),
    edit: (req, res) => res.send('Route for find and retrieve a edit from an ID'),
    put: (req, res) => res.send('Route for put and edit from an ID'),
    id: (req, res) => res.send('Route for delete from an ID')
}

module.exports = adminControllers;