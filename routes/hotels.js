import express from 'express';
import Hotels from '../models/Hotels.js';
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

// create
router.post("/",verifyAdmin , createHotel)
// updates
router.put("/:id",verifyAdmin , updateHotel)
// delete
router.delete("/:id",verifyAdmin , deleteHotel)
// get
router.get("/:id", getHotel)
// get all
router.get("/", getHotels)

export default router