#!/bin/bash

set -e -x
TALK=${1/.md/}

rm -rf slides/$TALK
mkdir -p {public,slides}/$TALK

# Add the header
cat <<EOF > $TALK.md
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

EOF

# Add the slides out of the list file
j=2
for i in $(cat $TALK.list); do
  j=$((j+1))
  SLIDE=$(printf "./slides/$TALK/%02s--%s.md" "$j" "$i")
  echo -ne "---\nsrc: $SLIDE\n---\n\n" >> $TALK.md
  touch $SLIDE
done;

# Add the footer
cat <<EOF >> $TALK.md
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
layout: questions
---

EOF
