import styled from 'styled-components';
import { FiMessageSquare } from 'react-icons/fi'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background-color: var(--color-link);
  z-index: 2;

  @media (min-width: 1180px) {
    display: none;
  }
`;

export const ProfileCircle = styled.img`
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
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

export const MessageIcon = styled(FiMessageSquare)`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin-left: 16px;
  border-radius: 4px;
  color: var(--color-white);
`;