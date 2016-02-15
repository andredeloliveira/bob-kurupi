Meteor.startup(function(){
  if(Meteor.users.find().count() === 0){
    //create the admin user, which will be updated at some point
    var adminUser = {
      username: "admin",
      email: "admin@admin.com",
      password: "ivegotthepower123",
      name: 'You are amazing',
      roles: ['admin']

    };
    /*creates the fecking admin*/
    var adminId = Accounts.createUser({
      email: adminUser.email,
      password: adminUser.password,
      profile: {
        name: adminUser.name
      }
    });
    console.log(adminId);
    Roles.addUsersToRoles(adminId, adminUser.roles, 'banda');
    //at this point hopefully it will be created
  }
});
