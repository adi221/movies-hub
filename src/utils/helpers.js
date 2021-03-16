export const getJSON = async function (url, errorMsg = 'Something went wrong') {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (err) {
    throw new Error(errorMsg);
  }
};
