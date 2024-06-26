import React from 'react';
import { BottomFixButton, Typhograph } from '@app/components';
import styled from '@app/style/typed-components';
import { screenWidth } from '@app/lib';
import { StormFloodName, StormFloodStateTypes } from '@app/screens/StormFlood/StormFloodContainer';
import { TermsModal } from '@app/screens';

type PresenterTypes = {
  state: StormFloodStateTypes;
  nextButton: () => void;
  onClickTermsModalOpen: (name: any, html: any) => void;
  handlePreviousButton: () => void;
  onChangeState: (name: StormFloodName, value: any) => void;
};

const Container = styled.View`
  width: ${screenWidth()}px;
`;

const ContentsContainer = styled.View``;

const RowBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const RowItem = styled.View`
  align-items: center;
  width: ${(props) => (props.width ? props.width : '0px')};
`;

function Presenter({ state, nextButton, onChangeState, onClickTermsModalOpen }: PresenterTypes) {
  return (
    <>
      <Container>
        <ContentsContainer>
          <Typhograph type="NOTO">상품안내</Typhograph>
        </ContentsContainer>
        <TermsModal
          open={state?.termsModal}
          close={() => onChangeState('termsModal', false)}
          html={state?.termsHtml}
          onPress={() => null}
          isButton={false}
        />
        <BottomFixButton
          index={state.stepNumber}
          leftTitle="이전"
          rightTitle="다음"
          bottomRightPress={() => nextButton()}
          bottomLeftPress={() => null}
          isKeybordView={state.isKeybordView}
        />
      </Container>
    </>
  );
}

export default Presenter;
