import React, {useState} from 'react';
import {Dialog, Paragraph, Portal} from 'react-native-paper';

interface Props {
  showDialog: boolean;
  content: string;
}
const DialogContainer: React.FC<Props> = ({showDialog, content}) => {
  const [visible, setVisible] = useState(showDialog);

  const hideDialog = () => setVisible(false);
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Content>
          <Paragraph>{content}</Paragraph>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default DialogContainer;
