Package.describe({
  name: 'littleq:littleq-polymer-loader',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This is to simplify the loading of Polymer 1.0 packages using Bower',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  
  var packages = [
    "differential:vulcanize@2.0.1",
    "mquandalle:bower@1.5.2_1"
  ]
  
  api.use(packages)
  api.imply(packages)
});


