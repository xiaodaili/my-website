/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import type { Props } from "@theme/DocPage/Layout/Main";
import { motion, useScroll, useSpring } from "framer-motion";

import styles from "./styles.module.css";

export default function DocPageLayoutMain({
  hiddenSidebarContainer,
  children,
}: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    duration: 0.001,
  });
  return (
    <main
      className={clsx(
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced
      )}
    >
      <div
        className={clsx(
          "container padding-top--md padding-bottom--lg",
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced
        )}
      >
        <motion.div className={styles.progressBar} style={{ scaleX }} />
        {children}
      </div>
    </main>
  );
}
