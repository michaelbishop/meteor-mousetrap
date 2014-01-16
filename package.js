Package.describe({
	summary: "Mousetrap packaged for Meteor"
});

Package.on_use(function (api){
	api.add_files('lib/mousetrap/mousetrap.js', 'client');
});
