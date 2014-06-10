'use strict';

var Photo = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    url: ''
  },
});
//MODEL ABOVE THIS LINE//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var PhotoCollectionOne = Backbone.Collection.extend({

  model: Photo,

  url: 'http://tiny-pizza-server.herokuapp.com/collections/photos'
});

//COLLECTION ONE ABOVE THIS LINE/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ThumbnailViewOne = Backbone.View.extend({

  classname: 'thumbnail',

  thumbnailTemplate: _.template($('.thumbnail-template').text()),

  events: {

    'click .movebutton1': 'jump1',
    'click .movebutton2': 'jump2',
    'click .deletebutton1': 'destroy',

  },

  initialize: function(){
    $('.modelcage1').append(this.el);
    this.render();
  },

  render: function(){
    if (this.model.attributes.hasOwnProperty('url')) {
      var renderedTemplate = this.thumbnailTemplate(this.model.attributes);
      this.$el.html(renderedTemplate);
    }
  },

  //showDetailView: function(){
    //var detail = new DetailView({model: this.model});
    //$('.modelcage1').append(detail);
  //},
});

var AppView = Backbone.View.extend({

  initialize: function(){
    this.listenTo(coolPhotos, 'add', function(photo){
      new ThumbnailViewOne({model: photo});
    });
  }
});

var coolPhotos = new PhotoCollectionOne();

var app = new AppView();

coolPhotos.fetch();