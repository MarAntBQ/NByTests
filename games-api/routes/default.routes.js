const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/games.controller');

router.get('/', (req, res) => {
    // Return a welcome message in JSON format
    res.json({ message: 'Welcome to the MarAntBQ API 2.5.0' });
});

router.get('/games', gamesController.viewAll);
router.get('/games/:id', gamesController.viewById);
router.post('/games', gamesController.createNew);
router.put('/games/:id', gamesController.updateById);
router.delete('/games/:id', gamesController.deleteById);


module.exports = router;