'use strict';
for (let i = 1; i <= 8; i++) {
  let hash = "";
  if (i % 2 == 1)
    hash += " ";
  for (let j = 1; j <= 4; j++) {
    hash += "# ";
  }

  console.log(hash);


}