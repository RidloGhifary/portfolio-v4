import React from "react";
import { motion } from "framer-motion";

// MotionLoader: thin wrapper that renders a motion element synchronously.
// This intentionally imports `motion` statically to avoid runtime issues.
export default function MotionLoader({
  as = "div",
  motionProps = {},
  children,
  ...rest
}) {
  const Tag = as;
  const MotionEl =
    motion[as] || motion.div || ((props) => React.createElement(Tag, props));
  return (
    <MotionEl {...motionProps} {...rest}>
      {children}
    </MotionEl>
  );
}
