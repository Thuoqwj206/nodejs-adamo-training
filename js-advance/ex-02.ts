let styles : string[] = ['Jazz','Blues'];

styles.push('Rock-n-Roll');

let middleIndex = styles.length/2;
styles[middleIndex] = 'Classic';

let firstStyle = styles[0];
console.log(firstStyle);

styles.unshift('Rap', 'Reggae ');