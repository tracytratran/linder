/* eslint-disable react/prop-types */
import { mergeClassNames } from "../helpers/util";

function IconFilled({ name, className }) {
  return (
    <i className={mergeClassNames(className, "material-icons-round")}>{name}</i>
  );
}

export default IconFilled;
