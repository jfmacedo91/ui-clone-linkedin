import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr'
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: none;
  padding: 0 30px;
  background-color: var(--color-header);

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1128px;
  height: 52px;
  margin: 0 auto;

  .left, .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 90px;
      min-height: 52px;
      border: 0;
      border-bottom: 2px solid var(--color-header);
      color: var(--color-icons);
      background: none;
      outline: none;
      cursor: pointer;

      &:hover {
        color: var(--color-white);
      }

      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-left: 16px;
  padding: 7.5px 8px;
  font-size: 14px;
  border: none;
  border-radius: 2px;
  color: var(--color-black);
  background-color: var(--color-input);
  outline: none;

  &:focus {
    background-color: var(--color-white);
  }
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

const generalIconsCSS = css`
  width: 24px;
  height: 24px;
`;

export const LinkedInIcon = styled(GrLinkedin)`
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 4px;
  border: 1px solid var(--color-link);
  color: var(--color-link);
  background-color: var(--color-white);
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconsCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
  ${generalIconsCSS}
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  ${generalIconsCSS}
  width: 16px;
  height: 16px;
`;