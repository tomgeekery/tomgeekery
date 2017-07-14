import React from "react";
import CMS from "netlify-cms";

import HomepagePreview from "./cms-preview-templates/homepage";

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("homepage", HomepagePreview);
