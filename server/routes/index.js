const env = process.env.NODE_ENV || 'development';

module.exports = (app) => {
    app.use(function(req, res, next) {
        next();
    });

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));
};