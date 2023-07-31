export interface HoverProps {
  changeTextColor: string | undefined;
  // onBackground: string | undefined;
}

export interface ButtonProps {
  background: string;
  buttonText: string;
  textColor: string;
  borderColor: string;
  height: string;
  width: string;
  textSize: string;
  opacity?: string;
  shadow?: string;
  onHover: string | HoverProps | null;
  onClickAction?: () => void;
}

export const Button = ({
  background,
  buttonText,
  textColor,
  borderColor,
  height,
  width,
  onHover,
  textSize,
  opacity,
  shadow,
  onClickAction,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`bg-${background} text-${textColor} border-${borderColor} h-${height} w-${width} m-10 p-1.5 font-button_font text-${textSize} rounded-3xl hover:${onHover} border-2 uppercase font-medium opacity-${opacity} shadow-${shadow}`}
      onClick={onClickAction}
    >
      {buttonText}
    </button>
  );
};
