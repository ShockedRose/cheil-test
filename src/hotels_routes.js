const express = require("express");
const router = express.Router({ strict: true });
const { Hotel, Review, Photo } = require("../models");

/**GET */

router.get("/hotels", async (req, res) => {
	try {
		const hotels = await Hotel.findAll();
		return res.json(hotels);
	} catch (e) {
		console.log(e);
		return res.status(500).json({ error: e });
	}
});

router.get("/hotels/:hoteluuid", async (req, res) => {
	try {
		const hotel = await Hotel.findOne({
			where: { uuid: req.params.hoteluuid },
			include: [Review, Photo],
		});
		return res.json(hotel);
	} catch (e) {
		console.log(e);
		return res.status(500).json({ error: e });
	}
});

/**POST */
router.post("/hotels", async (req, res) => {
	console.log("body", req.body);
	const { name, category, price } = req.body;

	try {
		const hotel = await Hotel.create({ name, category, price });
		return res.json(hotel);
	} catch (e) {
		console.log(e);
		return res.status(500).json({ error: e });
	}
});

router.post("/hotels/:hoteluuid/reviews", async (req, res) => {
	const { body, rating } = req.body;
	try {
		const hotel = await Hotel.findOne({
			where: { uuid: req.params.hoteluuid },
		});

		const review = await Review.create({ body, rating, hotelId: hotel.id });
		return res.json(review);
	} catch (e) {
		console.log(e);
		return res.status(500).json({ error: e });
	}
});

router.post("/hotels/:hoteluuid/photo", async (req, res) => {
	const { photoUrl } = req.body;
	try {
		const hotel = await Hotel.findOne({
			where: { uuid: req.params.hoteluuid },
		});

		const photo = await Photo.create({ url: photoUrl, hotelId: hotel.id });
		return res.json(photo);
	} catch (e) {
		console.log(e);
		return res.status(500).json({ error: e });
	}
});

// C - CREATE = POST
// R - READ = GET
// U - UPDATE = PUT
// D - DELETE = DELETE

module.exports = router;
