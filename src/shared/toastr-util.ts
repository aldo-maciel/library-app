import toastr from 'toastr';
import { dictionary } from './dictionary';

export const onSuccess = () => toastr.success(dictionary.SUCCESS_MESSAGE, dictionary.SUCCESS_TITLE);

export const onError = (error: Error, message = '') => {
    console.error(error);
    toastr.error(message || error.message || dictionary.ERROR_MESSAGE, dictionary.ERROR_TITLE);
};
