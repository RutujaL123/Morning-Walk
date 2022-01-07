var marks = [35,38,42,45,43];

function average(){
  var sum=0;
  for (var i=0; i<marks.length; i++){
    sum = sum+marks[i];
  }
  var avg = sum/marks.length;
console.log(avg);
}

function setup() 
{
  createCanvas(400,400);
  average();
}