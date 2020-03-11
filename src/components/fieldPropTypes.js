import * as PropTypes from "prop-types";
import fieldComponents from "./fieldTypes";

export default {
  id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  field: PropTypes.object,
  validation: PropTypes.object,
  validator: PropTypes.func,
  type: PropTypes.oneOf(Object.values(fieldComponents))
};
