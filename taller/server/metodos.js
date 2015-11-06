Meteor.methods({
	'agregarPendiente': function(pendiente){
			Pendientes.insert(pendiente);
	}
})