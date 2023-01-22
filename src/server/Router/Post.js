var express = require("express");
var router = express.Router();

router.post("/api/post/list", (req, res) => {
    selectData('id').then((doc) => {
        console.log(doc);
        res.status(200).json({success:true, postList: doc});
    }).catch((err) => {
        res.status(400).json({success: false});
    });
});

router.post("/api/post/submit", (req, res) => {
    let temp = req.body;
    insertData(temp.title, temp.content)
        .then(result => {
            res.status(200).json({success: true});
        })
        .catch((err) => {
            res.status(400).json({success: false});
        })
});

router.post("/api/post/detail", (req, res) => {
    selectPostNum(Number(req.body.postNum)).then((doc) => {
        res.status(200).json({success:true, post: doc});
    }).catch((err) => {
        res.status(400).json({success: false});
    });
});

router.post("/api/post/edit", (req, res) => {
    let temp = {
        title: req.body.title,
        content:req.body.content,
        postNum: req.body.postNum,
    }
    UpdateDATA(temp.postNum, temp.title, temp.content).then(() => {
        res.status(200).json({success:true});
    }).catch((err) => {
        res.status(400).json({success: false});
    });
});

router.post("/api/post/delete", (req, res) => {
    DeleteData(Number(req.body.postNum)).then(() => {
        res.status(200).json({success:true});
    }).catch((err) => {
        res.status(400).json({success: false});
    });
});

module.exports = router;
