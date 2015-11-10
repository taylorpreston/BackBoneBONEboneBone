console.log("it works?")

var PostModel = Backbone.Model.extend({
  url:"tiny-starburst.herokuapp.com/collections/postTaylor"
})

var PostView = Backbone.View.extend({
  tagName: 'section',
  template: _.template($('#postTemplate').html()),
  events:{
    'click #postBtn' : 'handlePost'
  },
  initialize: function(){
      console.log("post view")
  },
  handlePost: function(event){
    event.preventDefault()
    var title = $('#Title').val()
    var postBody = $('#postBody').val()
    var model = new PostModel
    console.log(title)
    console.log(postBody)
    console.log(model.url)
    model.set({
      "title": "title",
      "postBody": "postBody"
    });
    console.log(model.set())
    console.log('posted')
  },
  render: function(){
    console.log('Renered')
    this.$el.html(this.template());
    return this
  }
})

var PostRouter = Backbone.Router.extend({
  routes:{
    '':'post'
  },
  post: function(){
    var view = new PostView({
      // model : new PostModel
    })
    $('main').html(view.render().el)
  }
})


var router = new PostRouter();
Backbone.history.start();
