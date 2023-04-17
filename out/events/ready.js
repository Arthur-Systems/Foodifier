"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Events } = require('discord.js');
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Client logged in as user ${client.user.tag}`);
    },
};
