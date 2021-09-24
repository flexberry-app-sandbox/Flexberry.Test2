import { Serializer as ВладелецSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-владелец';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВладелецSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
