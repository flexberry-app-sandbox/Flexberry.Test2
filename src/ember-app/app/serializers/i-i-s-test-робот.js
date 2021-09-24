import { Serializer as РоботSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-робот';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РоботSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
