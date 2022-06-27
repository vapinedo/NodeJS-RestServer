const { request, response } = require('express');

const userGet = (req = request, res = response) => {
    const { location } = req.query;
    res.json({
        msg: 'GET API :: Controller',
        location,
    });
};

const userPost = (req = request, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'POST API :: Controller',
        nombre, 
        edad,
    });
};

const userPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'PUT API :: Controller',
        id
    });
};

const userDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API :: Controller'
    });
};

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
};