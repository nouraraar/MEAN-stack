const express = require('express');
const router =express.Router();

const stuffCtrl=require('../controlleurs/stuff');

const auth = require('../middleware/auth');


router.get('/', auth, stuffCtrl.showAll);
router.post('/', auth, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.showOneThing);
router.put('/:id', auth, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);


module.exports=router;