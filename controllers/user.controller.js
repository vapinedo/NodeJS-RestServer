const { response } = require('express');

const userGet = (req, res = response) => {
    res.json({
        msg: 'GET API :: Controller'
    });
};

const userPost = (req, res = response) => {
    res.json({
        msg: 'POST API :: Controller'
    });
};

const userPut = (req, res = response) => {
    res.json({
        msg: 'PUT API :: Controller'
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