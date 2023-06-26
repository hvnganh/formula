export const transformNumberArray = (array = ['']) => array.filter((item) => Number(item).toString() !== 'NaN');
