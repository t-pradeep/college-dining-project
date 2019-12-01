const router = require('express').Router();
let Equipment = require('../models/equipment');

router.route('/').get((req, res) => {
    Equipment.find()
        .then(equipments => res.json(equipments))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const orderNumber = req.body.orderNumber;
    const equipmentName = Date.parse(req.body.equipmentName);
    const Date = req.body.Date;
    const newEquipment = new Equipment({
        orderNumber,
        equipmentName,
        Date
    });

    newEquipment.save()
        .then(() => res.json('equipment added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Equipment.findById(req.params.id)
        .then(equipments => res.json(equipments))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Equipment.findByIdAndDelete(req.params.id)
        .then(() => res.json('equipment deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Equipment.findById(req.params.id)
        .then(subrequests => {
            subrequests.orderNumber = req.body.orderNumber;
            subrequests.equipmentName = req.body.equipmentName;
            subrequests.date = req.body.date;
            users.save()
                .then(() => res.json('equipment updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;