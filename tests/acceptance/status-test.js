import { test } from 'qunit';
import moduleForAcceptance from 'mirage-associations/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | status');

test('engagements load', function(assert) {
  let status = server.create('status');
  let engagement1 = server.create('engagement');
  engagement1.status = status;
  engagement1.save();

  let engagement2 = server.create('engagement', {
    status: status
  });

  visit('/');

  andThen(function() {
    assert.ok(find('.engagement-status-name').length, 'status was returned');
  });
});
