import { css } from '@emotion/react';
import { useCustomTheme } from '../../hooks/useCustomTheme';

const useQuoteMessageStyles = () => {
  const { theme, colors } = useCustomTheme();
  const messageContainer = css`
    margin: 0.2rem 2rem;
    position: relative;
    font-size: 0.85rem;
    background-color: ${colors.background};
    color: ${colors.foreground};
    padding: 0.5rem;
    z-index: ${theme.zIndex.general};
    border: 1px solid ${colors.border};
    border-radius: ${theme.schemes.radius};
  `;

  const avatarContainer = css`
    padding: 0.25rem;
    display: flex;
    gap: 0.5rem;
  `;

  const message = css`
    padding: 0.25rem;
  `;

  const actionBtn = css`
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
  `;

  return { messageContainer, avatarContainer, message, actionBtn };
};

export default useQuoteMessageStyles;
