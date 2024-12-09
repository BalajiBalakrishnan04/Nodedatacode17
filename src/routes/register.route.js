const express = require("express");
const router = express.Router();
const controller = require("../controllers/register.controller");


router.post("/postregister", controller.createRegister);
router.get("/getregister", controller.findUsers);
router.get("/getregisterbyid", controller.findByIdUsers);
router.get("/getregisterbyone", controller.findOneUsers);
router.put("/putdata",controller.putuserdata);
router.put("/putdataone", controller.putuserone);
router.put("/putmany",controller.putusermany);
router.delete("/deletedata",controller.deleteuser)
router.delete("/deleteone",controller.deleteuserone)
router.delete("/deletemany",controller.deleteusermany)


module.exports = router;