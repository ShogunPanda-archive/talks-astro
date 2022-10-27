#!/bin/bash

set -e -x
TALK=${1/.md/}

mkdir -p public/$TALK

# Add the header
cat <<EOF > talks/$TALK.md
---
title:
author:
  name: Paolo Insogna
  description_title: Staff Node.js Core and DX Engineer
  description: Staff Node.js Core and Developer Experience Team
  email: paolo.insogna@nearform.com
  twitter: p_insogna
  github: ShogunPanda
company:
  count: 300
  npm:
    monthly: 1B
    percentage: 8%
theme: ./theme
---

---
layout: hello
---

---
layout: quote
sentence:
author:
classes: bg-nf-brunch-pink text-white
---

---
layout: hiring
---

---
layout: image
main: Questions?
image: /theme/questions.jpg
imageClasses: -top-2gs
---

EOF
