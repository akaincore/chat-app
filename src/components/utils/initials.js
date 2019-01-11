const initials = title => {
  try {
    return title
      .split(' ')
      .map(word => word[0])
      .map(char => char.toUpperCase())
      .slice(0, 2);
  } catch (e) {
    return title.length ? title[0] : 'A';
  }
};

export default initials;
