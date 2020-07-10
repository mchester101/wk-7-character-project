

$(document).ready(function() {
  $("form#quiz").submit(function() {
  event.preventDefault();
  const answer1 = parseInt($("input:radio[name=question1]:checked").val());
  console.log(answer1);
  const answer2 = parseInt($("input:radio[name=question2]:checked").val());
  console.log(answer2);
  const answer3 = parseInt($("input:radio[name=question3]:checked").val());
  console.log(answer3);
  const total = answer1 + answer2 + answer3;
  let result;
  if (total <= 5) {
    result = "congrats! you are scully."
  } else if (total >=6 && total <= 15) {
    result = "it happens! you are mulder."
  } else {
    result = "you're an alien! take us with you."
  }

  console.log(total);
  console.log(result);

  $("#output").text(result);

  });
});
