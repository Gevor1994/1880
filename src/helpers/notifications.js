import { notification } from 'antd';
import { intlMessageValue, intlErrorMessageValue } from './storeUtils';

const renderMessage = (path) => {
  return intlMessageValue(`notifications.${path}`);
};

const renderErrorMessage = path => {
  return {
    title: intlErrorMessageValue(`serverError.title.${path}`),
    description: intlErrorMessageValue(`serverError.description.${path}`)
  }
};

export function showSuccess(id, description) {
  notification.close(id);

  notification.success({
    message: renderMessage('success'),
    description: renderMessage(description),
    key: id
  });
}

export function showError(id, description, errorInstance = null) {
  notification.close(id);

  if(errorInstance.response) {
    const { text, code } = errorInstance.response.data;

    let title = '', description = '';
    const message = renderErrorMessage(text);

    if(message.title && message.description) {
      title = message.title;
      description = message.description;
    } else {
      const message = renderErrorMessage(code);
      title = message.title;
      description = message.description;
    }


    notification.error({
      message: title,
      description,
      duration: 10,
      key: id
    });
  }


}

export function showInfo(id, description) {
  notification.close(id);

  notification.info({
    message: renderMessage('info'),
    description: renderMessage(description),
    key: id
  });
}

export function showWarning(id, description) {
  notification.close(id);

  notification.warning({
    message: renderMessage('warning'),
    description: renderMessage(description),
    key: id
  });
}
