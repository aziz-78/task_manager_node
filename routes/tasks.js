const express = require('express')
const router = express.Router()
const {getAllTasks,getTask,updateTask,deleteTask,createTask} = require("../controllers/tasks")
//  router.route("/").get(getPerson).post(createPerson)
//  router.post("/postman",createPersonPostman)
//  router.route("/:id").put(updatePerson).delete(deletePerson)

router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
