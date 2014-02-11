Package.describe({
	summary: "Mousetrap packaged for Meteor"
});

Package.on_use(function (api){
	api.add_files('mousetrap.js', 'client');
	api.export && api.export('Mousetrap');
});
