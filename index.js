function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i=0; i<4; i++) {
     array.push(`${musicians[i]} plays ${instruments[i]}`);
  } return array;
}

function johnLennonFacts(facts) {
  while (facts < 3 );
  return [...facts, "!!!"];
}