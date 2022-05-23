const router = require("express").Router();
let Detail = require("../models/Detail");

router.route("/add").post((req, res) => {

    const person_name = req.body.person_name;
    const mistake_md = req.body.mistake_md;
    const person_nic = req.body.person_nic;
    const phone_no = req.body.phone_no;
    const p_duration = req.body.p_duration;
    const st_prsn = req.body.st_prsn;
    const date = req.body.date;
    const time = req.body.time;


    const newDetail = new Detail({

        person_name,
        mistake_md,
        person_nic,
        phone_no,
        p_duration,
        st_prsn,
        date,
        time

    })

    newDetail.save().then(() => {
        res.json("Detail Added successfully")
    }).catch((err) => {
        console.log(err);
    })


})

router.route("/").get((req, res) => {
    Detail.find().then((details) => {
        res.json(details)
    }).catch((err) => {
        console.log(err);
    })

})


router.route("/update/:id").put(async (req, res) => {
    let id = req.params.id;
    const { person_name,mistake_md,person_nic,phone_no,p_duration,st_prsn,date,time } = req.body;

    const updateDetail = {

        person_name,
        mistake_md,
        person_nic,
        phone_no,
        p_duration,
        st_prsn,
        date,
        time
    }

    await Detail.findByIdAndUpdate(id, updateDetail)
        .then(() => {
            res.status(200).send({ status: "Detail Updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })

})

/*
router.route("/delete/:id").delete(async (req,res) => {
    let id = req.params.id;

    await Payment.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({status: "Bill deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete bill", error: err.message});
    })
})
*/

router.route("/delete/:id").delete((req, res) => {

    let id = req.params.id;

    Detail.findByIdAndDelete(id).then(() => {
        res.json("Delete Successfully");
    }).catch((err) => {
        console.log(err);
    })

})




router.route("/get/:id").get(async (req, res) => {
    let id = req.params.id;
    await Detail.findById(id).then((detail) => {
        //res.status(200).send({status: "detail fetched", detail})
        res.json(detail);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with get detail", error: err.message });
    })

})


module.exports = router;