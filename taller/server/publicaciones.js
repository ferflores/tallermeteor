Meteor.publish('misPendientes', function(){
	return Pendientes.find({});
});