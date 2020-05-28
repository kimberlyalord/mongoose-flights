const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
};

function newTicket(req, res) {
    console.log(req.params.id);
    Flight.findById(req.params.id, function(err, flight) {
        console.log(flight);
        res.render(`tickets/new`, {
            title: 'Add Ticket',
            flight
        });
    })
}

function create(req, res) {
    Ticket.create(req,body, function(err, ticket) {
        res.redirect(`/tickets/new`);
    });
}

function addToFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        const ticket = new Ticket(req.body);
        flight.tickets.push(ticket._id);
        ticket.flight = (req.params.id);
        flight.save();
        ticket.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    })
}