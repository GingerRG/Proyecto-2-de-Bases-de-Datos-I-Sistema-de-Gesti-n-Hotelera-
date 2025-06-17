const express = require("express");
const router = express.Router();
const { sql, config } = require("../db");

// GET todos los establecimientos
router.get("/", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().execute("sp_BuscarEstablecimiento");
    res.json(result.recordset);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error al obtener establecimientos");
  }
});

module.exports = router;