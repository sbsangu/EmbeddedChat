import { css } from '@emotion/react';
import { darken } from '../../lib/color';
import { useCustomTheme } from '../../hooks/useCustomTheme';

export const useChatInputStyles = () => {
  const { theme, colors } = useCustomTheme();
  const inputWithFormattingBox = css`
    border: 1px solid ${colors.border};
    border-radius: ${theme.schemes.radius};
    margin: 0.5rem 2rem 1rem 2rem;
    &.focused {
      border: ${`1.5px solid ${colors.ring}`};
    }
  `;

  const editMessage = css`
    border: 2px solid ${colors.border};
  `;

  const inputBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  `;

  const iconCursor = css`
    cursor: pointer;
  `;

  const textInput = css`
    resize: none;
    border: none;
    outline: none;
    font-size: 14px;

    &:focus {
      border: none;
      outline: none;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &::placeholder {
      padding-left: 5px;
    }
  `;

  return {
    inputWithFormattingBox,
    editMessage,
    inputBox,
    iconCursor,
    textInput,
  };
};

export const useChatInputFormattingToolbarStyles = () => {
  const { theme, mode, colors } = useCustomTheme();

  const chatFormat = css`
    bottom: 0;
    align-items: center;
    background-color: ${mode === 'light'
      ? darken(colors.background, 0.03)
      : colors.secondary};
    display: flex;
    position: relative;
    flex-direction: row;
    gap: 0.375rem;
    border-radius: ${theme.schemes.radius};
  `;

  return { chatFormat };
};

const commonRecorderStyles = {
  dot: css`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: red;
    margin: auto;
    margin-right: 8px;
  `,

  container: css`
    display: flex;
  `,

  timer: css`
    margin: auto;
  `,

  record: css`
    display: flex;
    margin: auto;
  `,
};

export const AudioMessageRecorderStyles = { ...commonRecorderStyles };
export const VideoMessageRecorderStyles = { ...commonRecorderStyles };
