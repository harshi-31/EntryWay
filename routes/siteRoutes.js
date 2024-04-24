import  express  from "express";
import { createSiteController, deleteSiteController, getSingleSiteController, getSiteController, sitePhotoController, updateSiteController } from "../Controllers/siteController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post('/create-site', requireSignIn, isAdmin, formidable(), createSiteController);

//routes
router.put(
    "/update-site/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateSiteController
  );

//get sites
router.get("/get-site", getSiteController);

//single site
router.get("/get-site/:slug", getSingleSiteController);

//get photo
router.get("/site-photo/:pid", sitePhotoController);

//delete site
router.delete("/delete-site/:pid", deleteSiteController);

export default router