const {model} = require ("mongoose")

const { HoldingsSchemas } = require("../schemas/HoldingsSchemas");

const HoldingsModel = new model ("holding" , HoldingsSchemas);

module.exports = {HoldingsModel};