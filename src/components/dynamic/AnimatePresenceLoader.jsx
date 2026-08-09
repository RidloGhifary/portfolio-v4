import React, { useEffect, useState } from "react";

export default function AnimatePresenceLoader({ children, mode, initial }) {
  const [AP, setAP] = useState(null);

  useEffect(() => {
    let mounted = true;
    import("framer-motion")
      .then((mod) => {
        if (mounted) setAP(() => mod.AnimatePresence || null);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  if (!AP) {
    // Fallback: render children directly without presence animations
    return <>{children}</>;
  }

  const APComp = AP;
  return (
    <APComp mode={mode} initial={initial}>
      {children}
    </APComp>
  );
}
