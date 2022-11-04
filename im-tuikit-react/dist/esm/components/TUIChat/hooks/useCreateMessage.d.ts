import TIM from '../../../@types/index.d.js';

interface BasicCreateMessageProps {
    needReadReceipt?: boolean;
    receiverList?: Array<string>;
    priority?: string;
    onProgress?: (num: number) => void;
    [propName: string]: TIM;
}
interface CreateTextMessageProps extends BasicCreateMessageProps {
    payload: {
        text: string;
    };
}
interface CreateFaceMessageProps extends BasicCreateMessageProps {
    payload: {
        index: number;
        data: string;
    };
}
interface CreateUploadMessageProps extends BasicCreateMessageProps {
    payload: {
        file: HTMLInputElement | File;
    };
}

export { BasicCreateMessageProps, CreateFaceMessageProps, CreateTextMessageProps, CreateUploadMessageProps };
