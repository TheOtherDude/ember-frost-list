module.exports = {
  afterInstall: function () {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-frost-core', target: '>=0.0.13 <1.0.0'},
        {name: 'ember-frost-sort', target: '>=3.0.0 <4.0.0'},
        {name: 'smoke-and-mirrors', target: '>=0.5.4 <1.0.0'},
        {name: 'ember-prop-types', target: '>=2.4.0 < 3.0.0'}
      ]
    })
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  }
}
