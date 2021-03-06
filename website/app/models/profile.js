import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	email: attr(),
	phone: attr(),
	image: attr(),
	gender: attr(),
	lastname: attr(),
	firstname: attr(),
	birthdate: attr(),
	user: belongsTo('user')
});
