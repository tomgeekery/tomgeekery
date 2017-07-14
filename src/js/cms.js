import React from "react";
import CMS from "netlify-cms";

import HomePagePreview from "./cms-preview-templates/homepage";

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("homepage", HomePagePreview);
