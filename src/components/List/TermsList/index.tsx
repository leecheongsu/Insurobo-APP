import { insuIcon } from '@app/assets';
import { IconButton, Typhograph } from '@app/components';
import { TermsChildTypes, TermsNames } from '@app/screens/HouseFire/HouseFireContainer';
import styled from '@app/style/typed-components';
import React from 'react';
import { Image } from 'react-native';

type TermsListTypes = {
  item: TermsChildTypes;
  onChangeTermsState: (name: TermsNames, value) => void;
  onClickTermsModalOpen: (name, html) => void;
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const RowBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
const RowButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const Item = styled.View``;
export default function TermsList({ item, onChangeTermsState, onClickTermsModalOpen }: TermsListTypes) {
  const onClickIsChecked = () => {
    onChangeTermsState(item.name, item.isChecked === 0 ? 1 : 0);
  };
  return (
    <Container>
      <Item style={{ width: '80%' }}>
        <RowButton onPress={() => onClickTermsModalOpen(item.name, item.html)}>
          <Typhograph lineheight={3} type="NOTO" color="BLUE" size={11} style={{ marginRight: 5 }}>
            {item.title}
          </Typhograph>
          <Image style={{ width: 5, height: 8 }} source={insuIcon.ARR_RIGHT} />
        </RowButton>
      </Item>
      <Item style={{ width: '20%' }}>
        <RowBox>
          <IconButton onPress={() => onClickIsChecked()}>
            <Image source={item.isChecked === 0 ? insuIcon.BT_CHECK_OFF : insuIcon.BT_CHECK_ON} />
          </IconButton>
          <Typhograph type="NOTO" color="BLUE" size={13} style={{ marginLeft: 5 }}>
            동의
          </Typhograph>
        </RowBox>
      </Item>
    </Container>
  );
}
