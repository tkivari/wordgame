#!/bin/bash
mkdir -p js/templates
touch js/templates/precompiled_templates.js
handlebars templates/ -f js/templates/precompiled_templates.js
echo "built"