import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  progress: attr('number'),
  status: belongsTo('status', {
    async: true,
    inverse: null
  })
});
