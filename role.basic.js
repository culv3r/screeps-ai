/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.basic');
 * mod.thing == 'a thing'; // true
 */
 
module.exports = {
    run: function(creep){
        var found = creep.pos.lookFor(LOOK_STRUCTURES);
        if (!found.length){
            creep.pos.createConstructionSite(STRUCTURE_ROAD);
        }
        if (found.length && found[0] != STRUCTURE_ROAD){
            creep.pos.createConstructionSite(STRUCTURE_ROAD);
        }
    }
};