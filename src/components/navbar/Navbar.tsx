import React from 'react';
import { StyledRowWrapper, StyledWrapper } from './Navbar.styled';
import { AutoComplete, Input } from 'antd';

const Navbar = () => {
  /**
   * Criteria:
   * - Logo
   * - Categories (Clothing, home, etc)
   * - Login, Register
   * - All categories
   * - Sell button
   * - Search bar
   * - Location
   * - Search button
   */
  return (
    <StyledWrapper>
      <StyledRowWrapper></StyledRowWrapper>
      <StyledRowWrapper>
        <AutoComplete popupMatchSelectWidth={252} style={{ width: 200 }}>
          <Input size='large' placeholder='Location' />
        </AutoComplete>
        <AutoComplete popupMatchSelectWidth={252} style={{ width: 300 }}>
          <Input.Search
            size='large'
            placeholder='Search your product'
            enterButton
          />
        </AutoComplete>
      </StyledRowWrapper>
    </StyledWrapper>
  );
};

export default Navbar;
