import { useModalContext } from '../contexts/Modal';

function useModal(ModalComponent) {
  const { handleVisible, handleDismiss } = useModalContext();

  const show = (props) => {
    handleVisible(ModalComponent, props);
  };

  return [show, handleDismiss];
}

export default useModal;
