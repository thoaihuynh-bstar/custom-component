export const isUrl = (string: String) => {
  const regex = /^((http|https|ftp):\/\/)/;
  return regex.test(string?.toString());
};
