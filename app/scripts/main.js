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

  url: 'http://tiny-pizza-server.herokuapp.com/collections/georgiaphoto'
});

//COLLECTION ONE ABOVE THIS LINE/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var PhotoCollectionTwo = Backbone.Collection.extend({

  model: Photo,

  url: 'http://tiny-pizza-server.herokuapp.com/collections/georgiaphotos'
});

//COLLECTION TWO ABOVE THIS LINE/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var PhotoCollectionThree = Backbone.Collection.extend({

  model: Photo,

  url: 'http://tiny-pizza-server.herokuapp.com/collections/moregeorgiaphotos'
});

//COLLECTION THREE ABOVE THIS LINE///////////////////////////////////////////////////////////////////////////
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

  
});

//VIEW ONE ABOVE THIS LINE///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ThumbnailViewTwo = Backbone.View.extend({

  classname: 'thumbnail',

  thumbnailTemplate2: _.template($('.thumbnail-template-two').text()),

  events: {

    'click .movebutton3': 'jump3',
    'click .movebutton4': 'jump4',
    'click .savebutton1': 'save',
  },

  initialize: function(){
    $('.modelcage2').append(this.el);
    this.render();
  },

  render: function(){
    if (this.model.attributes.hasOwnProperty('url')) {
      var renderedTemplate = this.thumbnailTemplate2(this.model.attributes);
      this.$el.html(renderedTemplate);
    }
  },
});

//VIEW TWO ABOVE THIS LINE///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ThumbnailViewThree = Backbone.View.extend({

  classname: 'thumbnail',
  thumbnailTemplate3: _.template($('.thumbnail-template-three').text()),

  events: {

    'click .movebutton5': 'jump5',
    'click .movebutton6': 'jump6',
    'click .savebutton2': 'save2',
  },

  initialize: function(){
    $('.modelcage3').append(this.el);
    this.render();
  },

  render: function(){
    if (this.model.attributes.hasOwnProperty('url')) {
      var renderedTemplate = this.thumbnailTemplate3(this.model.attributes);
      this.$el.html(renderedTemplate);
    }
  },
});

//VIEW THREE ABOVE THIS LINE/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var AppView2 = Backbone.View.extend({

  initialize: function(){
    this.listenTo(coolerPhotos, 'add', function(photo){
      new ThumbnailViewTwo({model: photo});

    });
  }
});

var coolerPhotos = new PhotoCollectionTwo();

var apps = new AppView2();

coolerPhotos.fetch();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var AppView3 = Backbone.View.extend({

  initialize: function(){
    this.listenTo(coolestPhotos, 'add', function(photo){
      new ThumbnailViewThree({model: photo});
    });
  }
});

var coolestPhotos = new PhotoCollectionThree();

var app3 = new AppView3();

coolestPhotos.fetch();