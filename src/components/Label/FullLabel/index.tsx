import React from 'react';
import styled from '@app/style/typed-components';
import { Typhograph } from '@app/components';
import theme from '@app/style/theme';

type FullLabelTypes = {
  title: string | number;
  icon?: any;
};

const Container = styled.View`
  background-color: ${theme.color.WHITE};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.color.BORDER_GRAY};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
`;
const Diveder = styled.View`
  height: 8px;
  background-color: ${theme.color.DIVIDER_BACK};
`;
const RowBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RowItem = styled.View``;

function FullLabel({ title, icon }: FullLabelTypes) {
  return icon ? (
    <>
      <Container>
        <RowBox>
          <RowItem>
            <Typhograph type="NOTO" color="BLACK2" size={14} weight="MEDIUM" style={{ textAlign: 'center' }}>
              {title}
            </Typhograph>
          </RowItem>
          <RowItem>{icon}</RowItem>
        </RowBox>
      </Container>
      <Diveder />
    </>
  ) : (
    <>
      <Container>
        <Typhograph type="NOTO" color="BLACK2" size={14} weight="MEDIUM" style={{ textAlign: 'center' }}>
          {title}
        </Typhograph>
      </Container>
      <Diveder />
    </>
  );
}

export default FullLabel;
