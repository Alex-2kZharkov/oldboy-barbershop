import { ReactElement, PropsWithChildren } from 'react';

type ButtonVariant = 'standard' | 'accentLink';

export interface ButtonProps extends PropsWithChildren {
  variant: ButtonVariant;
  onClick?: () => void;
}

export const Button = ({ variant, onClick, children }: ButtonProps): ReactElement => {
  const classes: Record<ButtonVariant, string> = {
    standard:
      'bg-orange-title text-white border-orange-title text-xs hover:bg-white hover:text-header-bg min-w-180',
    accentLink:
      'bg-transparent text-btn-blue border-btn-blue text-xs hover:bg-white opacity-70 shadow-[boxShadow.btn] max-w-180 px-6',
  };

  return (
    <button
      type="button"
      className={`${classes[variant]} box-border font-button_font rounded-3xl border-2 uppercase font-medium py-2 px-7`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
