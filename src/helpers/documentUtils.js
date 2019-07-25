
export function injectHTML(id, content) {
  if (!id || !content) {
    return;
  }

  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.innerHTML = content;
};

export function injectMeta(id, name, content) {
  if (!id || !name || !content) {
    return;
  };

  const metaTags = document.head.getElementsByTagName('meta');
  let metaGoogle = null;
  for (let i = 0; i < metaTags.length; i++) {
    const currentMeta = metaTags[i];
    if (currentMeta.name && currentMeta.name.toLowerCase() === 'google') {
      metaGoogle = currentMeta;
    };
  };

  let metaElement = document.getElementById(id);
  if (metaElement) {
    metaElement.name    = name;
    metaElement.content = content;

    return;
  }

  metaElement         = document.createElement('meta');
  metaElement.name    = name;
  metaElement.content = content;
  metaElement.id      = id;

  if (metaGoogle) {
    document.head.insertBefore(metaElement, metaGoogle);
  } else {
    document.head.appendChild(metaElement);
  }
};


