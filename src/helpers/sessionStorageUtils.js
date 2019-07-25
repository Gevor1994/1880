
export function storeData(key, data) {
  const storedData = JSON.stringify(data);
  sessionStorage.setItem(key, storedData);
};

export function restoreData(key, defaultValue = null) {
  try {
    const restoredData = sessionStorage.getItem(key);
    return JSON.parse(restoredData);

  } catch(err) {
    console.log(err);
    return defaultValue;
  }
}

export function clearData(key) {
  sessionStorage.removeItem(key);
}

