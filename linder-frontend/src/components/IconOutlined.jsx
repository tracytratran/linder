/* eslint-disable react/prop-types */

import { mergeClassNames } from "../helpers/util";

function IconOutlined({ name, className }) {
  return (
    <i className={mergeClassNames(className, "material-symbols-outlined")}>
      {name}
    </i>
  );
}

export default IconOutlined;
