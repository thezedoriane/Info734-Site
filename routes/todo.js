//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/todo');

//CREATE
router.post("/todoS", (req, res) => {

    controller.createS(req, res);

});

router.post("/todoC", (req, res) => {

    controller.createC(req, res);

});

router.post("/todoP", (req, res) => {

    controller.createP(req, res);

});

//READ
router.get("/todoSs", (req, res) => {
    
    controller.readSs(req, res);

});

router.get("/todoS/:id", (req, res) => {
    
    controller.readS(req, res);

});

router.get("/todoCs", (req, res) => {
    
    controller.readCs(req, res);

});

router.get("/todoC/:id", (req, res) => {
    
    controller.readC(req, res);

});

router.get("/todoPs", (req, res) => {
    
    controller.readPs(req, res);

});

router.get("/todoP/:id", (req, res) => {
    
    controller.readP(req, res);

});

//UPDATE
router.put("/todoS/:id", (req, res) => {
    
    controller.updateS(req, res);

});

router.put("/todoC/:id", (req, res) => {
    
    controller.updateC(req, res);

});

router.put("/todoP/:id", (req, res) => {
    
    controller.updateS(req, res);

});
