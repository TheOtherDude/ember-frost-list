import Ember from 'ember'
import FrostListItem from 'ember-frost-list/components/frost-list-item'

export default FrostListItem.extend({
  classNames: ['frost-list-item'],
  record: Ember.computed.alias('model.record')
})
