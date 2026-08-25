"use client";

import { createInViewScene } from "./in-view-canvas";

export const LazyGlobe = createInViewScene(() => import("./globe-scene"));
