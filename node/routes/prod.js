const { Console } = require('console');
const Router = require('express');
const router = Router();
const prodData = require('../models/prod');

router.get('/getLogsData', (req, res, next) => {
    prodData.logsData((result) => {
        if (!result) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true,
                result: result
            });
        }
    })
});


router.get('/getTypeData', (req, res, next) => {
    prodData.typeData((result) => {
        if (!result) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true,
                result: result
            });
        }
    })
});

router.get('/getUserData', (req, res, next) => {
    prodData.userData((result) => {
        if (!result) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true,
                result: result
            });
        }
    })
});


router.post('/saveProductionDataSession', (req, res, next) => {
    prodData.saveProductionDataSession(req.body, (output) => {
    });
    res.json({
        success: true
    });
})


router.post('/saveLampTypeSession', (req, res, next) => {
    prodData.saveLampType(req.body, (output) => {
    });
    res.json({
        success: true
    });
})

router.post('/saveUserData', (req, res, next) => {
    prodData.saveUserData(req.body, (output) => {
    });
    res.json({
        success: true
    });
})
module.exports = router;