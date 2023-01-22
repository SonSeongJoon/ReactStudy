const express = require("express");
const path = require("path");
const {Client} = require("pg");
const {useState} = require("react");
const app = express();
const port = 5000;
const client = new Client({
    user: "postgres",
    host: "hjbrain.iptime.org",
    database: "postgres",
    password: "qhdtncjswo",
    port: 6543,
});

const insertData = async (title, content) => {
    try {
        await client.query(
            `INSERT INTO "board" ("title", "content")  
             VALUES ($1, $2)`, [title, content]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};
const insertData_user = async (email, displayName, uid) => {
    try {
        await client.query(
            `INSERT INTO "users" ("email", "displayname", "uid")  
             VALUES ($1, $2, $3)`, [email, displayName, uid]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const selectData = async(id) => {
    try {
        const rows = await client.query('SELECT * FROM "board" ORDER BY $1 DESC ', [id]);
        return rows.rows;
    } catch (error) {
        console.log(error.stack);
    }
}
const selectPostNum = async(idNum) => {
    try {
        const rows = await client.query('SELECT * FROM "board" WHERE "id"=$1 ', [idNum]);
        return rows.rows;
    } catch (error) {
        console.log(error.stack);
    }
}

const UpdateDATA = async(id, title, content) => {
    try {
        await client.query('UPDATE "board" SET "title"=$1, "content"=$2 WHERE "id"=$3', [title, content, id]);
    } catch (error) {
        console.log(error.stack);
    }
}

const DeleteData = async(idNum) => {
    try {
        await client.query('DELETE FROM "board" WHERE "id" = $1', [idNum]);
    } catch (error) {
        console.log(error.stack);
    }
}


app.use(express.static(path.join(__dirname, "../../build")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    client
        .connect()
        .then(()=> {
            console.log(`Example app listening at http://localhost:${port}`);
            console.log("Connecting PostSql.....");
    })
        .catch((err) => {
            console.log(`${err}`);
            client.end();
        });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
});

app.post("/api/post/list", (req, res) => {
    selectData('id').then((doc) => {
            console.log(doc);
            res.status(200).json({success:true, postList: doc});
        }).catch((err) => {
            res.status(400).json({success: false});
        });
    });

app.post("/api/post/submit", (req, res) => {
    let temp = req.body;
    insertData(temp.title, temp.content)
        .then(result => {
            res.status(200).json({success: true});
        })
        .catch((err) => {
            res.status(400).json({success: false});
        })
});

app.post("/api/post/detail", (req, res) => {
    selectPostNum(Number(req.body.postNum)).then((doc) => {
        res.status(200).json({success:true, post: doc});
    }).catch((err) => {
        res.status(400).json({success: false});
    });
});

app.post("/api/post/edit", (req, res) => {
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

app.post("/api/post/delete", (req, res) => {
    DeleteData(Number(req.body.postNum)).then(() => {
        res.status(200).json({success:true});
    }).catch((err) => {
        res.status(400).json({success: false});
    });
});

/////////////////////////////////user.js///////////////////////////////////////

app.post("/api/user/register", (req, res) => {
    let temp = req.body;
    insertData_user(temp.email, temp.displayName, temp.uid)
        .then(result => {
            res.status(200).json({success: true});
        })
        .catch((err) => {
            res.status(400).json({success: false});
        })
})


//req: 요청
//res: 응답

// cross-origin Resource Sharing