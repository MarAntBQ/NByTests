const config = require('../config');
const sendEmail = require('../services/sendEmail.service');

const Game = require('../models/game.model');

exports.viewAll = async (req, res) => {
    try {
        const allGames = await Game.findAll();
        res.status(200).json(allGames);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.viewById = async (req, res) => {
    const { id } = req.params;
    try {
        const game = await Game.findByPk(id);
        if (!game) {
            return res.status(404).json({ error: `No se encontró el juego con id ${id}.` });
        }
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createNew = async (req, res) => {
    const { name, description} = req.body;
    try {
        // Search if the game already exists by name
        const alreadyExists = await Game.findOne({ where: { name } });
        if (alreadyExists) {
            return res.status(409).json({ error: `Ya existe un juego con el nombre ${name}.` });
        }
        const newGame = await Game.create({
            name,
            description
        });
        res.status(201).json(newGame);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateById = async (req, res) => {
    const { id } = req.params;
    const { name, description} = req.body;
    try {
        // Search if the game already exists by name
        const alreadyExists = await Game.findByPk(id);
        if (!alreadyExists) {
            return res.status(404).json({ error: `No se encontró el juego con id ${id}.` });
        }
        const gameUpdated = await Game.update({
            name,
            description
        }, {
            where: { id }
        });

        // Search for the updated game
        const updatedGame = await Game.findByPk(id);
        res.status(201).json(updatedGame);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        // Search if the game already exists by name
        const alreadyExists = await Game.findByPk(id);
        if (!alreadyExists) {
            return res.status(404).json({ error: `No se encontró el juego con id ${id}.` });
        }
        // Delete the game
        await Game.destroy({
            where: { id }
        });
        res.status(201).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};