console.log("hey");

var FormModel = Backbone.Model.extend({
  url:"http://tiny-starburst.herokuapp.com/collections/people",
  default: {
    firstName: "",
    lastName:"",
    Address:"",
    phoneNum:""
  }
})

var FormView = Backbone.View.extend({
  initialize: function(){
    console.log("initialized form")
  },

  events: {
    'click submitBtn' : 'formSubmit'
  },

  formSubmit: function(){
  var firstName = $('#firstName').val()
  var lastName = $('#lastName').val()
  var address = $('#Address').val()
  var phoneNum = $('#phoneNum').val()
  var input = $('.inPut').val()
  var model = new FormModel
  },

  if(input == ""){
    alert(get me some info baby)
  }else {
    console.log("inputs done be made")
    model.set({
      "firstname": firstName,
      "lastname": lastName,
      "address": address,
      "phonenumber": phoneNum,
      })
  }

  render: function(){
    console.log('rendererererer');
    this.$el.html('body'.html)
    return this
  }
})

view = new FormView
view.render(view.el)
