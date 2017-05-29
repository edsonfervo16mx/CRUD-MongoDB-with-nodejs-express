var express = require("express");
var router = express.Router();

router.get("/:cve_profile",function(request,response){
	response.render("profile/show.pug");
});


module.exports = router;