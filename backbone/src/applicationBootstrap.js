require.config(
{
	baseUrl: './src',
	waitSeconds: 10,
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	},
	paths:
	{
		hbs: "../bower_components/handlebars/hbs"
	},
	hbs:
	{
		templateExtension : 'hbs',
		disableI18n : false
	},
	packages: [
		{
			name: "jquery",
			location: "../bower_components/jquery",
			main: "jquery"
		},
		{
			name: "json2",
			location: "../bower_components/json2",
			main: "json2"
		},
		{
			name: "underscore",
			location: "../bower_components/underscore",
			main: "underscore"
		},
		{
			name: "backbone",
			location: "../bower_components/backbone",
			main: "backbone"
		},
		{
			name: "handlebars",
			location: "../bower_components/handlebars",
			main: "handlebars"
		}
	]
});

var logger = log4javascript.getLogger("MacrosMakerApplication");
logger.setLevel(log4javascript.Level.ALL);
logger.addAppender(new log4javascript.BrowserConsoleAppender());
logger.debug("Logger initialized.");

require(["MacrosMakerApplication"], function(MacrosMakerApplication)
{
	var macrosMakerApplication = new MacrosMakerApplication();
	logger.debug("Application ready.");
});