
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'md', password: '123'},
        {username: 'maria', password: '123'},
        {username: 'loki', password: '123'}
      ]);
    });
};
