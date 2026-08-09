import React, { useEffect, useState } from "react";

// MotionLoader: dynamically imports framer-motion and renders a motion element
// Props:
// - as: tag name (div, h1, section, etc.)
// - motionProps: props passed to motion element (initial, animate, transition)
// - rest: other props like className, style, id

export default function MotionLoader({
  as = "div",
  motionProps = {},
  children,
  ...rest
}) {
  const [motionObj, setMotionObj] = useState(null);

  useEffect(() => {
    let mounted = true;
    import("framer-motion")
      .then((mod) => {
        if (mounted) setMotionObj(mod.motion || mod);
      })
      .catch(() => {
        // ignore - we'll render static fallback
      });
    return () => {
      mounted = false;
    };
  }, []);

  const Tag = as;

  if (!motionObj) {
    // Render static element to avoid layout shift; no animation until lib loads
    return <Tag {...rest}>{children}</Tag>;
  }

  const MotionEl = motionObj[as] || motionObj.div;
  return (
    <MotionEl {...motionProps} {...rest}>
      {children}
    </MotionEl>
  );
}
