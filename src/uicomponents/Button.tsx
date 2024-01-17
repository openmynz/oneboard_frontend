import {Theme,Button} from '@radix-ui/themes';

interface MyButtonProps {
  children: React.ReactNode;
  className?: string;
  // Add other props as needed, e.g., onClick, variant, etc.
}

const MyButton: React.FC<MyButtonProps> = ({ children, className, ...rest }) => (
  <Theme appearance="light" accentColor="orange" radius="full" className={className} {...rest}    >
    <Button >{children}</Button>
  </Theme>
);

export default MyButton;
