/*service configuration file for the the external OAuth services*/
ServiceConfiguration.configurations.remove(
  {service: 'facebook'}
);
ServiceConfiguration.configurations.insert({
  service: 'facebook',
  appId: '648252298647138',
  secret: 'bbe1eced8900c199ae9c6c9633de771b'
});
