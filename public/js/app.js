new Vue({
	el: '#events',

	data: {
		event: {name:'', description:'', date:''},
		events: {}
	},

	ready: function() {
		this.fetchEvents();
	},

	methods: {
		fetchEvents: function() {
			this.$http.get('/events').then(function(response) {
				this.$set('events', response.data);
			}, function(err) {
				console.log(err);
			});
		},

		addEvent: function() {
			if(this.event.name) {
				this.$http.post('/events', this.event).then(function(response) {
					this.events.push(this.event);
					console.log("Event added");
					console.log(this.event);
					this.event = {name:'', description:'', date:''};
				}, function(err) {
					console.log(err);
				});
			}
		},

		deleteEvent: function(index, event) {
			if(confirm("Are you sure you want to delete this event?")) {
				this.$http.delete('/events/' + event._id).then(function(response) {
					this.events.splice(index, 1);
					console.log(response);
				})
			}
		}
	}
});