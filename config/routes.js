

module.exports.routes = {

  '/': { view: 'pages/homepage' },
  'POST /task/add': 'TaskController.add',
  'PATCH /task/edit/:id': 'TaskController.edit',
  'DELETE /task/delete/:id': 'TaskController.delete',
  // 'GET /todos/search/': 'TodosController.search',
  'GET /task': 'TaskController.getAll',



};
