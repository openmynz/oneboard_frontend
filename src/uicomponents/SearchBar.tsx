import {Theme,TextField} from '@radix-ui/themes';
interface MyButtonProps {
    
    className?: string;
    // Add other props as needed, e.g., onClick, variant, etc.
  }
  const SearchBar: React.FC<MyButtonProps> = ({ className }) => (
   <Theme className={className}><TextField.Input radius="full" placeholder="Search " size="1" /></Theme>
  );
  
  export default SearchBar;