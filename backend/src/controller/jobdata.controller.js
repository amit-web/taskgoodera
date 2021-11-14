const express = require("express");
const jobdata = require("../modals/jobdata.modal");
const router = express.Router();

router.post("/", async (req, res) => {
    const jobs = await jobdata.create(req.body);
    return res.status(201).send({ jobs });
});

router.get("/", async (req, res) => {
    const jobs = await jobdata.find().lean().exec();
    return res.status(200).send({ jobs });
});

router.get("/:id", async (req, res) => {
    const jobs = await jobdata.findById(req.params.id).lean().exec();
    return res.status(200).send({ jobs });
});

router.patch("/:id", async (req, res) => {
    const jobs = await jobdata.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        .lean()
        .exec();
    return res.status(200).send({ jobs });
});

router.delete("/:id", async (req, res) => {
    const jobs = await jobdata.findByIdAndRemove(req.params.id);
    return res.status(200).send({ jobs });
});

module.exports = router;
