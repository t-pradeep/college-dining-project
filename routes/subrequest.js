const router = require('express').Router();
let Subrequest = require('../models/subrequest');

router.route('/').get((req, res) => {
    Subrequest.find()
        .then(subrequests => res.json(subrequests))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const day = Date.parse(req.body.day);
    const timing = req.body.timing;
    const station = req.body.station;
    const newSubrequest = new Subrequest({
        name,
        day,
        timing,
        station
    });

    newSubrequest.save()
        .then(() => res.json('subrequest added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Subrequest.findById(req.params.id)
        .then(subrequests => res.json(subrequests))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Subrequest.findByIdAndDelete(req.params.id)
        .then(() => res.json('subrequest deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Subrequest.findById(req.params.id)
        .then(subrequests => {
            subrequests.name = req.body.name;
            subrequests.day = req.body.day;
            subrequests.timing = req.body.timing;
            subrequests.station = req.body.station;
            users.save()
                .then(() => res.json('subrequest updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;