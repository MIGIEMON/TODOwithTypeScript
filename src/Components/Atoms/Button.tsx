type ButtomProps = {
  onClick?: (e: React.MouseEvent) => void;
  action: "add" | "edit" | "delete";
  children: React.ReactNode;
};

export const Button: React.FC<ButtomProps> = ({
  onClick,
  action,
  children
}) => {
  return (
    <Button action={action} onClick={onClick}>
      {children}
    </Button>
  );
};
