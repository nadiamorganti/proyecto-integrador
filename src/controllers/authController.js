const authControllers = {
    login: (req, res) => res.send('Route for login View'),
    register: (req, res) => res.send('Route for register View'),
    logout: (req, res) => res.send('Route for logout View')
}


module.exports = authControllers;