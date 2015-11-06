Template.lista.onCreated(function(){
	Meteor.subscribe("misPendientes");
});

Template.lista.helpers({
  pendientes: function(){
  	return Pendientes.find({});
  }
});

Template.lista.events({
	"click .delete": function(){
		Pendientes.remove({_id:this._id});
	}
})