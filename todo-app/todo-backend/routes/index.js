const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')
const {getAsync, TODO_COUNTER_KEY} = require("../redis");

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  try {
    const addedTodos = Number(await getAsync(TODO_COUNTER_KEY) || 0);
    res.json({
      added_todos: addedTodos
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ error: 'Error fetching statistics' });
  }
});

module.exports = router;
