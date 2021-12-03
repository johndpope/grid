declare type ConfirmModalProps = {
    title: string;
    message: string;
    onConfirm?: () => void;
    onAsyncConfirm?: () => Promise<void>;
    variant?: 'danger' | 'warning' | 'success' | undefined;
};
export declare function showConfirmAlert(props: ConfirmModalProps): void;
export {};
