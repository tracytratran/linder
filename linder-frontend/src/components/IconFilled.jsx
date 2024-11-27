/* eslint-disable react/prop-types */
import { mergeClassNames } from "../helpers/util";

function IconFilled({ name, className, handleClick }) {
  return (
    <i
      className={mergeClassNames(className, "material-icons-round")}
      onClick={handleClick}
    >
      {name}
    </i>
  );
}

export default IconFilled;
