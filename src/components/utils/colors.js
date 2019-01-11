import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import blue from '@material-ui/core/colors/blue';

const colors = [red, pink, purple, deepPurple, blue];

const getColor = string => {
  try {
    const code = string
      .toString()
      .split('')
      .map(char => char.charCodeAt())
      .reduce((sum, charCode) => sum + charCode, 0);
    const index = code % colors.length;
    return colors[index][500];
  } catch (e) {
    return colors[blue][500];
  }
};

export default getColor;
