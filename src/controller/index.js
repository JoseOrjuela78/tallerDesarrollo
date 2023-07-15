exports.create = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query(`INSERT INTO usuarios SET ?`, [req.body], (err, result) => {

            if (err) return res.send(err);
            res.send("Usuario creado exitosamente");
        })


    })
};

exports.getall = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query(`SELECT * FROM usuarios `, (err, result) => {

            if (err) return res.send(err);
            res.send(result);
        })


    })
};

exports.getOne = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query(`SELECT * FROM usuarios WHERE idusuarios = ? `, [req.params.id], (err, result) => {

            if (err) return res.send(err);
            res.send(result);
        })


    })
};


exports.update = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query(`UPDATE usuarios SET ? WHERE idusuarios = ? `, [req.body, req.params.id], (err, result) => {

            if (err) return res.send(err);
            res.send("Usuario actualizado exitosamente");
        })


    })
};


exports.deleteItem = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query(`DELETE FROM usuarios WHERE idusuarios = ? `, [req.params.id], (err, result) => {

            if (err) return res.send(err);
            res.send("Usuario borrado exitosamente");
        })


    })
};