(function ()
{
	define(["underscore", "backbone"], function(_, Backbone)
	{
		console.debug("underscore:");
		console.debug(_);
		console.debug("Backbone:");
		console.debug(Backbone);
		var MacrosMakerApplication = Backbone.View.extend({
			el: '#macrosMakerApp',

			events: {
				'click #calculate': 'calculateCalories'
			},

			initialize: function()
			{

			},

			render: function()
			{

			},

			calculateCalories: function()
			{
				 logger.debug("Sup");
			}
		});
		return MacrosMakerApplication;
	});
}());