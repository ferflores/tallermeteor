Template.formulario.events({
	"click #crear": function(){
		var text = $("#nombre").val();

		Meteor.call('agregarPendiente',
			{nombre:text, fecha: new Date()});
	}
})