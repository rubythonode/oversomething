import styled from '@emotion/styled';

import { pickColor } from 'constants/themes';

export default styled.hr`
  background-color: ${pickColor('foreground')};
`;