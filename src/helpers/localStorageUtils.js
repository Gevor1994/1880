
export function storeData(key, data) {
  const storedData = JSON.stringify(data);
  localStorage.setItem(key, storedData);
};

export function restoreData(key, defaultValue = null) {
  try {
    const restoredData = localStorage.getItem(key);
    return JSON.parse(restoredData);

  } catch(err) {
    console.log(err);
    return defaultValue;
  }
}

export function clearData(key) {
  localStorage.removeItem(key);
}

