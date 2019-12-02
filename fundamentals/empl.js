let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 console.log('Employee');
 console.log(users.employees.length);
 for (i = 0; i < users.employees.length ; i++) {
      var tot = users.employees[i].last_name.length + users.employees[i].first_name.length;
      console.log(i+1 + ' - ' + users.employees[i].last_name + ', ' + users.employees[i].first_name + ' - ' + tot);
          
 }

 console.log(users.managers.length);
 for (i = 0; i < users.managers.length ; i++) {
      var tot = users.managers[i].last_name.length + users.managers[i].first_name.length;
      console.log(i+1 + ' - ' + users.managers[i].last_name + ', ' + users.managers[i].first_name + ' - ' + tot);
          
 }